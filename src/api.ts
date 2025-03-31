import axios from 'axios'
import { IRequestData } from './types'
const API_KEY = '4bbd1e648ee0483a9c661708253103' // api key 注册weatherapi 获取
const BASE_URL = 'http://api.weatherapi.com/v1' // 接口路径

export const getWeather = async (city: string): Promise<IRequestData> => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json `, {
      params: {
        key: API_KEY,
        days: 7,
        q: city,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
