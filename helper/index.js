export default class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  sameSizeAs(other) {
    return this.w === other.w && this.h === other.h;
  }

  fitsIn(outer) {
    return outer.w >= this.w && outer.h >= this.h;
  }
}
