const countNumberOfIdenticalItems = (data) => {
  const title = new Set();
  const result = [];

  data.forEach((item) => {
    if (!title.has(item.title)) {
      result.push({ ...item, count: 1 });
      title.add(item.title);
    } else {
      const id = [...title].indexOf(item.title);
      result[id].count += 1;
    }
  });

  return result;
};

export default countNumberOfIdenticalItems;
