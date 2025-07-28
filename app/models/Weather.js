import { AppState } from "../AppState.js"

export class Weather {

  constructor(data) {
    this.location = data.location
    this.icon = data.icon
    this.name = data.name
    this.main = data.main
    this.feels_like = data.main.feels_like
    this.humidity = data.main.humidity
    this.temp_max = data.main.temp_max
    this.temp_min = data.main.temp_min
    this.description = data.description
    this.temp = data.main.temp
    this.weather = data.weather
    this.icon = data.weather.icon
    this.description = data.weather[0].description
    this.pressure = data.pressure
    this.wind = data.wind.speed

    this.currentFormat = 'celsius'

  }

  get celsiusTemp() {
    const kelvin = this.temp
    const celsiusTemp = kelvin - 273
    return Math.floor(celsiusTemp)

  }

  get fahrenheitTemp() {
    const kelvin = this.temp
    const fahrenheit = (kelvin - 273)
    const fahrenheitTemp = fahrenheit * 9 / 5 + 32
    return Math.floor(fahrenheitTemp)
  }

  get currentTemp() {
    const weatherChange = AppState.weather
    if (this.currentFormat == 'fahrenheit') {
      return `<div class="text-center fs-2 p-2">${this.fahrenheitTemp}°F</div>`
    }
    return `<div class="text-center fs-2 p-2">${this.celsiusTemp}°C</div>`
  }


  get tempTemplate() {
    return `
    <section>
      <div class"justify-content-between align-items-center d-flex">
      <div class="text-center fs-2 p-3">${this.name}</div>
        <div onclick="app.weatherController.changeTemp()" role="button" class="text-center fs-4 border border-dark rounded-pill px-3">
          ${this.currentTemp} 
          <div class="text-capitalize"> ~${this.description}</div>
          <img src="${this.icon}" alt"${this.description}">
        </div>
        </div>
    </section>`
  }


}
