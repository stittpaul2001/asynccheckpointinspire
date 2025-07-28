import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"


class WeatherService {


  changeTemp() {
    const weather = AppState.weather
    if (weather.tempChanges == 'celsius') {
      weather.fahrenheitTemp
    }
    else {
      weather.celsiusTemp
    }
  }


  async getWeather() {
    const response = await api.get('api/weather')
    console.log('weather', response.data)
    const weather = new Weather(response.data)
    AppState.weather = weather
  }



}

export const weatherService = new WeatherService()