import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {

  constructor() {
    console.log('weather controller coming right atcha')
    AppState.on('weather', this.drawTemp)
    this.getWeather()
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error('could not get the weather', error)
      // @ts-ignore
      Pop.error(error, 'could not get the weather')
    }

  }

  drawTemp() {
    const weather = AppState.weather
    let weatherContent = weather.tempTemplate
    const weatherElem = document.getElementById('weatherTemp')
    weatherElem.innerHTML = weatherContent
  }

}