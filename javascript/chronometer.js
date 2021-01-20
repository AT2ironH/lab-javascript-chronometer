class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime ++
      
    }, 1000)
    
  }
  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    // ... your code goes here
   let seconds = Math.floor(this.currentTime % 60)
   return seconds
  }
  twoDigitsNumber(num) {
    // ... your code goes here
    if (num <10 ){
      return `0${num}`;
    }
    else {
      return `${num}`;
    }
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0 
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();

    min = this.twoDigitsNumber(min)
    sec = this.twoDigitsNumber(sec)
    return `${min}:${sec}`;
  }
    
}
