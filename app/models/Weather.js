
export class Weather {

  constructor(data) {
    this.location = data.location
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
    return `${this.celsiusTemp}`

  }


}
