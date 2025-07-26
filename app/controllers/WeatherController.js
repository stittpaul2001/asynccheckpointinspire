import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {

  constructor() {
    console.log('weather controller coming right atcha')

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

}