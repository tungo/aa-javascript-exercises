class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    let timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds++;
    if (this.seconds > 59) {
      this.seconds = this.seconds % 60;
      this.minutes++;
      if (this.minutes > 59) {
        this.minutes = this.minutes % 60;
        this.hours++;
      }
    }
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();
