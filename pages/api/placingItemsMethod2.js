import Rect from '@helper/index';
import Timer from '@helper/timer';

class Node {
  constructor() {
    this.rect = null;
    this.filled = false;
    this.y = 0;
    this.x = 0;
    this.maxY = 0;
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
      arr.forEach((item) => {
        if (item.width + this.x <= this.rect.w) {
          if (item.height + this.y <= this.rect.h) {
            if (uniquenessCheck(item)) {
              if (this.maxY < item.height) {
                this.maxY = item.height;
              }
              res.push({ ...item, x: this.x, y: this.y });
              this.x += item.width;
            }
          }
        }
        return item;
      });
      arr.forEach((item) => {
        if (item.height + this.y + this.maxY <= this.rect.h) {
          if (uniquenessCheck(item)) {
            this.y += this.maxY;
            this.x = 0;
            this.maxY = item.height;
            res.push({ ...item, x: this.x, y: this.y });
            this.x = item.width;
            rec();
          }
        }
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
