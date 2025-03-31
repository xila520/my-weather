import React, { useRef, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Skeleton } from 'antd'

import WeatherCard from './component/WeatherCard'
import WeatherForm from './component/CityInput'
import { getWeather } from './api'
import { IWeatherData, ICurWeather } from './types'

const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`

const ErrorBox = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
  color: #dc3545;
`
const DEFAULT_CITY = 'Shanghai'
const WeatherApp: React.FC = () => {
  const [curWeather, setCurWeather] = useState<ICurWeather>()
  const [weather, setWeather] = useState<IWeatherData[]>([])
  const [city, setCity] = useState(DEFAULT_CITY)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true)
      const data = await getWeather(city)
      const formattedData = data?.forecast?.forecastday?.map?.((day: any) => ({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        condition: {
          text: day.day.condition.text,
          icon: day.day.condition.icon,
        },
      }))
      setWeather(formattedData)
      setCurWeather({
        local: data.location.name,
        feelTemp: data.current.feelslike_c,
      })
      setError('')
    } catch (error) {
      setError('获取天气数据失败，请检查城市名称')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [city])

  return (
    <div>
      <h1>未来七天天气</h1>
      <WeatherForm onSearch={setCity} defaultCity={DEFAULT_CITY} />
      {loading ? (
        <Skeleton />
      ) : error ? (
        <ErrorBox>{error}</ErrorBox>
      ) : (
        <>
          <h3>当前位置：{curWeather.local}</h3>
          <h4>当前温度：{curWeather.feelTemp}°C</h4>
          <WeatherContainer>
            {weather.map((day, index) => (
              <WeatherCard key={index} data={day} />
            ))}
          </WeatherContainer>
        </>
      )}
    </div>
  )
}

export default WeatherApp
