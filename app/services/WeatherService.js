import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"


class WeatherService {


  changeTempFormat() {
    const weather = AppState.weather
    if (weather.currentFormat == 'celsius') {
      weather.currentFormat = 'fahrenheit'
    }
    else {
      weather.currentFormat = 'celsius'
    }
    console.log('⛅', weather);

  }


  async getWeather() {
    const response = await api.get('api/weather')
    console.log('weather', response.data)
    const weather = new Weather(response.data)
    AppState.weather = weather
  }



}

export const weatherService = new WeatherService()