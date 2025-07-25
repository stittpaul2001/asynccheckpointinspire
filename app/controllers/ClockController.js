
export class ClockController {

  constructor() {
    console.log('What time is it???')

    this.drawClock()

    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    setInterval(this.drawClock, 1000)

  }

  drawClock() {
    const currentTime = new Date()
    document.getElementById('Clock').innerText = `${currentTime.toLocaleTimeString()}`
  }




}