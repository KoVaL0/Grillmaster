export default class Timer {
  constructor() {
    this.date = new Date();
  }

  finishTimer() {
    return new Date() - this.date;
  }
}
