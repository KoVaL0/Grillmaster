export default class Timer {
  constructor() {
    this.date = new Date();
  }

  stopTimer() {
    return new Date() - this.date;
  }
}
