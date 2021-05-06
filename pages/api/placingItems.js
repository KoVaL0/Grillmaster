function Rect(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

Rect.prototype.same_size_as = function (other) {
  return this.w === other.w && this.h === other.h;
};

<<<<<<< HEAD
Rect.prototype.fits_in = function (outer) {
  return outer.w >= this.w && outer.h >= this.h;
};
=======
Rect.prototype.fits_in = function(outer){
  return outer.w >= this.w && outer.h >= this.h;
}
>>>>>>> c6167281f87c38b82fc43d0b146773e82d1ea1ad

function Node() {
  this.rect = null;
  this.filled = false;
  this.maxY = 0;
  this.y = 0;
  this.x = 0;
}

Node.prototype.insert_rect = function (rect, prevRect) {
  let newRect = new Rect(0, 0, rect.w, rect.h);
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

  if (this.filled) return null;

<<<<<<< HEAD
  if (!newRect.fits_in(this.rect)) { return null; }

  if (newRect.same_size_as(this.rect)) {
=======
  if(!rect.fits_in(this.rect))
    return null;

  if (rect.same_size_as(this.rect)) {
>>>>>>> c6167281f87c38b82fc43d0b146773e82d1ea1ad
    this.filled = true;
    return this;
  }

  if (newRect.h > this.maxY) {
    this.maxY = newRect.h;
  }

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
};

export default function placingItems(req, res) {
  const { grill } = JSON.parse(req.body);
  const items = [];
  const Bag = [];
  const outBag = [];
  let node;

  // creating list grill all items
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
    node = startNode.insert_rect(rect, node);
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
