export default class Timer {
  constructor() {
    this.date = new Date();
  }

  stop() {
    return new Date() - this.date;
  }
}
