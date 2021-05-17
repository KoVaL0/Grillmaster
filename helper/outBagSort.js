export default class OutBagSort {
  constructor(data) {
    this.data = data;
    this.res = [];
  }

  findUniqElem() {
    const title = [];
    this.data.forEach((item) => {
      if (!title.includes(item.title)) {
        this.res.push({ ...item, count: 1 });
        title.push(item.title);
      } else {
        const id = title.indexOf(item.title);
        this.res[id].count += 1;
      }
    });
    return this.res;
  }
}
