
export class Weather {

  constructor(data) {
    this.location = data.location
    this.icon = data.icon
    this.name = data.name
    this.main = data.main
    this.description = data.description
    this.weather = data.weather
    this.temp = data.temp
    this.humidity = data.humidity
    this.pressure = data.pressure
    this.wind = data.wind
    this.feels_like = data.feels_like
  }

  get celsiusTemp() {
    const kelvin = 293
    const celsius = kelvin - 273
    return Math.floor(celsius)

  }

  get fahrenheitTemp() {
    const kelvin = 293
    const fahrenheit = (kelvin - 273) * 9 / 5 + 32
    return Math.floor(fahrenheit)
  }

  get tempChanges() {
    if (this.fahrenheitTemp) {
      return `<div class="text-center fs-2 p-2">${this.fahrenheitTemp}°F</div>`
    }
    return `<div class="text-center fs-2 p-2">${this.celsiusTemp}°C</div>`
  }


  get tempTemplate() {
    return `${this.tempChanges}`
  }


}
