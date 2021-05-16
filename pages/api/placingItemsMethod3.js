import Timer from '@helper/timer';
import Rect from '@helper/index';

class Node {
  constructor() {
    this.rect = null;
    this.filled = false;
    this.y = [0];
    this.x = [0];
    this.lastX = 0;
    this.lastY = 0;
    this.back = false;
    this.prevBlock = {};
  }

  insertRect(arrayItems) {
    const arr = arrayItems.map((item, id) => ({ ...item, id }));
    if (this.filled) return null;
    const res = [];
    const uniquenessCheck = (item) => {
      const id = res.map((i) => i.id);
      if (id.includes(item.id)) { return false; }
      return true;
    };

    const rec = () => {
      arr.forEach((item, index) => {
        if (item.height + this.lastY <= this.rect.h) {
          if (item.width + this.lastX <= this.rect.w) {
            if (!this.back) {
              if (uniquenessCheck(item)) {
                if (this.lastY + item.height <= this.y[this.y.length - 1]) {
                  res.push({ ...item, x: this.lastX, y: this.lastY });
                  if (this.prevBlock.height === item.height) {
                    this.lastX += item.width;
                    this.x[this.x.length - 1] += item.width;
                  } else {
                    this.x.push(item.width);
                    this.lastX += item.width;
                  }
                  if (this.prevBlock.height !== item.height) {
                    this.y.push(item.height + this.lastY);
                  }
                  this.prevBlock = item;
                } else if (this.y[this.y.length - 1] === 0) {
                  res.push({ ...item, x: this.lastX, y: this.lastY });
                  if (this.prevBlock.height === item.height) {
                    this.lastX += item.width;
                    this.x[this.x.length - 1] += item.width;
                  } else {
                    this.x.push(item.width);
                    this.lastX += item.width;
                  }
                  if (this.prevBlock.height !== item.height) {
                    this.y.push(item.height + this.lastY);
                  }
                  this.prevBlock = item;
                }
              }
            } else if (item.height + this.lastY <= this.y[this.y.length - 1]) {
              if (uniquenessCheck(item)) {
                res.push({ ...item, x: this.lastX, y: this.lastY });
                if (this.prevBlock.height === item.height) {
                  this.lastX += item.width;
                  this.x[this.x.length - 1] += item.width;
                } else {
                  this.x.push(item.width);
                  this.lastX += item.width;
                }
                this.prevBlock = item;
              }
              this.back = false;
              rec();
            } else if (this.lastY === this.y[this.y.length - 1]) {
              this.lastY = this.y[this.y.length - 1];
              this.y.pop();
              this.lastX -= this.x[this.x.length - 1];
              this.x.pop();
            }
          } else if (arr.length - 1 === index) {
            this.lastY = this.y[this.y.length - 1];
            this.y.pop();
            this.lastX -= this.x[this.x.length - 1];
            this.x.pop();
            this.back = true;
            this.prevBlock = {};
            rec();
          }
        }
        return item;
      });
      const outBag = arr.filter((item) => uniquenessCheck(item));
      return { Bag: res, outBag };
    };
    return rec();
  }
}

export default function placingItems(req, res) {
  const { grill } = JSON.parse(req.body);
  const items = [];
  const date = new Timer();
  grill.grillItems.forEach((item) => {
    for (let i = 0; i < item.count; i += 1) {
      items.push(item);
    }
  });
  items.sort((prev, next) => next.height - prev.height);

  const startNode = new Node();
  startNode.rect = new Rect(0, 0, grill.width, grill.height);
  const data = startNode.insertRect(items);
  res.json({ Bag: data.Bag, outBag: data.outBag, date: date.finishTimer() });
}