function Rect(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

Rect.prototype.same_size_as = function (other) {
  return this.w === other.w && this.h === other.h;
};

Rect.prototype.fits_in = function(outer){
  return outer.w >= this.w && outer.h >= this.h;
}

function Node() {
  this.rect = null;
  this.filled = false;
  this.maxY = 0;
  this.y = 0;
  this.x = 0;
}

Node.prototype.insert_rect = function (rect, prevRect) {

  const findSpace = () => {
    if (this.rect.w - this.x >= rect.w) {
      rect.x = this.x;
      rect.y = this.y;
      this.x = rect.x + rect.w;
    } else if (this.rect.h - this.y - this.maxY >= rect.h) {
      this.y += this.maxY;
      rect.y = this.y;
      rect.x = 0;
      this.x = rect.w;
      rect.width_diff = this.rect.w;
      this.maxY = 0;
    } else rect = null;
  };

  if (this.filled) return null;

  if(!rect.fits_in(this.rect))
    return null;

  if (rect.same_size_as(this.rect)) {
    this.filled = true;
    return this;
  }

  if (rect.h > this.maxY) {
    this.maxY = rect.h;
  }

  if (prevRect) {
    findSpace();
  } else if (this.x !== 0 && this.y !== 0) {
    rect.x = this.x;
    rect.y = this.y;
    findSpace();
  } else {
    this.x = rect.w;
    return rect;
  }

  return rect;
};

export default function placingItems(req, res) {
  const grill = JSON.parse(req.body).grill;
  const items = [];
  const Bag = [];
  const outBag = [];
  let node;

  // creating list grill all items
  grill.grillItems.map((item) => {
    for (let i = 0; i < item.count; i++) {
      items.push(item);
    }
  });

  items.sort((prev, next) => next.height - prev.height);

  const start_node = new Node();
  start_node.rect = new Rect(0, 0, grill.width, grill.height);

  items.forEach((item, id) => {
    item.id = id;
    const rect = new Rect(0, 0, item.width, item.height);
    node = start_node.insert_rect(rect, node);
    if (node) {
      Bag.push({...item, x: node.x, y: node.y});
    } else if (!node) {
      outBag.push(item);
    }
  });
  res.json({Bag, outBag});
};

// function findItem(grill, weight) {
//   const item = grill.grillItems.filter((item) => weight === item.width * item.height);
//   return item[0];
// }
//
// function placingItems(req, res) {
//   const grill = JSON.parse(req.body).grill;
//   const Bag = [];
//   const outBag = [];
//   const weight = [];
//   const C = grill.width * grill.height;
//   const N = grill.grillItems.reduce((count, grillItem) => count + grillItem.count, 0);
//   const W = [];
//   grill.grillItems.map(grillItem => {
//     const weight = grillItem.height * grillItem.width;
//     for (let i = 0; i < grillItem.count; i++) {
//       W.push(weight);
//     }
//   });
//   W.sort((a, b) => b - a);
//   for (let i = 0; i < N; i++) {
//     const sum = weight.reduce((sum, item) => sum + item, 0);
//     if (sum < C) {
//       if (sum + W[i] <= C) {
//         weight.push(W[i]);
//         Bag.push(findItem(grill, W[i]));
//         continue;
//       }
//     }
//     outBag.push(findItem(grill, W[i]));
//   }
//   res.statusCode = 200;
//   // res.json({Bag, outBag});
// }


