import React from 'react'
import styled from 'styled-components'
import { IWeatherData } from '../types'

const WeatherCardContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 10px;
  }
  img {
    width: 50px;
    height: 50px;
  }
`
const TempBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  .max-temp {
    color: #e63946;
    font-weight: bold;
  }
  .min-temp {
    color: #007bff;
    font-weight: bold;
  }
`
interface Props {
  data: IWeatherData
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  return (
    <WeatherCardContainer key={data.date}>
      <h3>{data.date}</h3>
      <img src={data.condition.icon} alt={data.condition.text} />
      <p>{data.condition.text}</p>
      <TempBox>
        <span className='max-temp'>{data.maxTemp}°C</span>
        <span className='min-temp'>{data.minTemp}°C</span>
      </TempBox>
    </WeatherCardContainer>
  )
}

export default WeatherCard
