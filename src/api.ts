import axios from 'axios'
import { IRequestData } from './types'
const API_KEY = '4bbd1e648ee0483a9c661708253103' // open'12d2891a7ccbc04b80d5c667c1b86fd0' // 替换为你自己的 API Key
const BASE_URL = 'http://api.weatherapi.com/v1' // 'https://api.openweathermap.org/data/2.5'

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
