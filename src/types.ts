export interface IRequestData {
  current: {
    // 实时天气数据
    feelslike_c: number // 体感温度
    [K: string]: any
  }
  forecast: {
    // 未来天气数据
    forecastday: any[]
  }
  location: {
    // 位置
    name: string
    [K: string]: any
  }
}

export interface IWeatherData {
  date: number // 时间戳
  maxTemp: number // 最大温度
  minTemp: number // 最小温度
  condition: {
    text: string // 天气情况（如Clouds, Rain）
    icon: string // 图标
  }
}

export interface ICurWeather {
  local: string
  feelTemp: number
}
