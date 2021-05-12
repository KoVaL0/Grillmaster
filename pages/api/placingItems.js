import Rect from '../../helper/index';

class Node {
  constructor() {
    this.rect = null;
    this.filled = false;
    this.maxY = 0;
    this.y = 0;
    this.x = 0;
  }

  insertRect(rect, prevRect) {
    let newRect = new Rect(0, 0, rect.w, rect.h);

    if (this.filled) return null;

    if (!newRect.fitsIn(this.rect)) {
      return null;
    }

    if (newRect.sameSizeAs(this.rect)) {
      this.filled = true;
      return this;
    }

    if (newRect.h > this.maxY) {
      this.maxY = newRect.h;
    }

    const findSpace = () => {
      if (this.rect.w - this.x >= newRect.w) {
        newRect.x = this.x;
        newRect.y = this.y;
        this.x += newRect.w;
      } else if (this.rect.h - this.y - this.maxY >= newRect.h) {
        this.y += this.maxY;
        newRect.y = this.y;
        newRect.x = 0;
        this.x = newRect.w;
        newRect.width_diff = this.rect.w;
        this.maxY = 0;
      } else newRect = null;
    };

    if (prevRect) {
      findSpace();
    } else if (this.x !== 0 && this.y !== 0) {
      newRect.x = this.x;
      newRect.y = this.y;
      findSpace();
    } else {
      this.x = newRect.w;
      return newRect;
    }

    return newRect;
  }
}

export default function placingItems(req, res) {
  const { grill } = JSON.parse(req.body);
  const items = [];
  const Bag = [];
  const outBag = [];
  let node;
  grill.grillItems.forEach((item) => {
    for (let i = 0; i < item.count; i += 1) {
      items.push(item);
    }
  });

  items.sort((prev, next) => next.height - prev.height);

  const startNode = new Node();
  startNode.rect = new Rect(0, 0, grill.width, grill.height);

  items.forEach((item, id) => {
    const rect = new Rect(0, 0, item.width, item.height);
    node = startNode.insertRect(rect, node);
    if (node) {
      Bag.push({
        ...item, x: node.x, y: node.y, id,
      });
    } else if (!node) {
      outBag.push({ ...item, id });
    }
  });
  res.json({ Bag, outBag });
}
