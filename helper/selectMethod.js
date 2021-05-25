import Node from '@helper/node';
import OutBagSort from '@helper/outBagSort';

export const selectMethod = (method, grill) => {
  let startNode;
  let data;
  if (method === 'RecursiveMethod') {
    startNode = new Node(0, 0);
  } else {
    startNode = new Node([grill.height], [0]);
  }
  const items = startNode.initGrill(grill);
  startNode.rect = { w: grill.width, h: grill.height };
  if (method === 'RecursiveMethod') {
    data = startNode.insertRectRecursiveMethod(items);
  } else {
    data = startNode.insertRectBestMethod(items);
  }
  const outBag = new OutBagSort(data.outBag).findUniqElem();
  return { data, outBag };
};
