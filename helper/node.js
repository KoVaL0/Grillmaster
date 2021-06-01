export default class Node {
  constructor(y, x) {
    this.rect = null;
    this.y = y;
    this.x = x;
    this.maxY = 0;
    this.items = [];
    this.lastX = 0;
    this.lastY = 0;
    this.back = false;
    this.prevBlock = {};
    this.result = [];
  }

  initGrill(grill) {
    grill.grillItems.forEach((item) => {
      for (let i = 0; i < item.count; i += 1) {
        this.items.push(item);
      }
    });

    this.items.sort((prev, next) => next.height - prev.height);
    return this.items;
  }

  uniquenessCheck = (item) => {
    const id = new Set();
    this.result.forEach((i) => id.add(i.id));

    if (id.has(item.id)) {
      return false;
    }

    return true;
  };

  insertRectRecursiveMethod(arrayItems) {
    const iterableArray = arrayItems.map((item, id) => ({ ...item, id, fill: item.color }));

    const addItemToResultingArray = (item) => {
      this.result.push({ ...item, x: this.x, y: this.y });
      this.x += item.width;
    };

    const placementCycle = () => {
      iterableArray.forEach((item) => {
        if (item.width + this.x > this.rect.w) {
          return;
        }

        if (item.height + this.y > this.rect.h) {
          return;
        }

        if (this.uniquenessCheck(item)) {
          if (this.maxY < item.height) {
            this.maxY = item.height;
          }
          addItemToResultingArray(item);
        }
      });

      iterableArray.forEach((item) => {
        if (item.height + this.y + this.maxY > this.rect.h) {
          return;
        }

        if (this.uniquenessCheck(item)) {
          this.x = 0;
          if (item.width + this.x > this.rect.w) {
            return;
          }
          this.y += this.maxY;
          this.maxY = item.height;
          addItemToResultingArray(item);
          placementCycle();
        }
      });
      const outBag = iterableArray.filter((item) => this.uniquenessCheck(item));

      return { bag: this.result, outBag };
    };
    return placementCycle();
  }

  insertRectBestMethod(arrayItems) {
    const iterableArray = arrayItems.map((item, id) => ({ ...item, id, fill: item.color }));

    const checkHeightPrevBlock = (item) => {
      if (this.prevBlock.height === item.height) {
        this.lastX += item.width;
        this.x[this.x.length - 1] += item.width;
      } else {
        this.x.push(item.width);
        this.lastX += item.width;
      }
    };

    const stepBack = () => {
      this.lastY = this.y[this.y.length - 1];
      this.y.pop();
      this.lastX -= this.x[this.x.length - 1];
      this.x.pop();
    };

    const addItemToResultingArray = (item) => {
      this.result.push({ ...item, x: this.lastX, y: this.lastY });
    };

    const iterableItems = () => {
      iterableArray.forEach((item, index) => {
        if (item.height + this.lastY > this.rect.h) {
          return;
        }

        if (item.width + this.lastX <= this.rect.w) {
          if (!this.back) {
            if (!this.uniquenessCheck(item)) return;

            if (this.lastY + item.height <= this.y[this.y.length - 1]) {
              addItemToResultingArray(item);
              checkHeightPrevBlock(item);

              if (this.prevBlock.height !== item.height) {
                this.y.push(item.height + this.lastY);
              }

              this.prevBlock = item;
            } else if (this.y[this.y.length - 1] === 0) {
              addItemToResultingArray(item);

              if (this.prevBlock.height !== item.height) {
                this.y.push(item.height + this.lastY);
              }
              this.prevBlock = item;
            }
          } else if (item.height + this.lastY <= this.y[this.y.length - 1]) {
            if (this.uniquenessCheck(item)) {
              addItemToResultingArray(item);
              checkHeightPrevBlock(item);
              this.prevBlock = item;
            }

            this.back = false;
            iterableItems();
          } else if (this.lastY === this.y[this.y.length - 1]) {
            stepBack();
          }
        } else if (iterableArray.length - 1 === index) {
          stepBack();
          this.back = true;
          this.prevBlock = {};
        }
      });
    };

    const placementCycle = () => {
      iterableItems();
      iterableItems();
      const outBag = iterableArray.filter((item) => this.uniquenessCheck(item));

      return { bag: this.result, outBag };
    };
    return placementCycle();
  }
}
