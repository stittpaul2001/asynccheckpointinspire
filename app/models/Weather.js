import { AppState } from "../AppState.js"

export class Weather {

  constructor(data) {
    this.location = data.location
    this.icon = data.icon
    this.name = data.name
    this.main = data.main
    this.main0 = data.main.feels_like
    this.main1 = data.main.temp
    this.main2 = data.main.humidity
    this.main3 = data.main.temp_max
    this.main4 = data.main.temp_min
    this.description = data.description
    this.temp = data.temp
    this.weather = data.weather
    this.weather0 = data.weather.icon
    this.weather1 = data.weather[0].description
    this.pressure = data.pressure
    this.wind = data.wind.speed

  }

  get celsiusTemp() {
    const kelvin = 293
    const celsiusTemp = kelvin - 273
    return Math.floor(celsiusTemp)

  }

  get fahrenheitTemp() {
    const kelvin = 293
    const fahrenheit = (kelvin - 273)
    const fahrenheitTemp = fahrenheit * 9 / 5 + 32
    return Math.floor(fahrenheitTemp)
  }

  get tempChanges() {
    const weatherChange = AppState.weather
    if (this.fahrenheitTemp) {
      return `<div class="text-center fs-2 p-2">${this.fahrenheitTemp}°F</div>`
    }
    return `<div class="text-center fs-2 p-2">${this.celsiusTemp}°C</div>`
  }


  get tempTemplate() {
    return `<section class="px-2 mx-2"
    <div class="text-center fs-4">${this.name}-${this.weather1}</div>
    <div onclick="app.weatherController.changeTemp() role="button" class="text-center fs-4">
    ${this.tempChanges}
    </div>
    <div class="text-center fs-2"> ${this.celsiusTemp} °C</div>
    </section>`
  }


}
