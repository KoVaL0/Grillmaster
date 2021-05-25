export default class OutBagSort {
  constructor(data) {
    this.data = data;
    this.result = [];
  }

  findUniqElem() {
    const title = [];
    this.data.forEach((item) => {
      if (!title.includes(item.title)) {
        this.result.push({ ...item, count: 1 });
        title.push(item.title);
      } else {
        const id = title.indexOf(item.title);
        this.result[id].count += 1;
      }
    });
    return this.result;
  }
}
