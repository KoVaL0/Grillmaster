import { RECURSIVE_METHOD } from '@/constants';
import Node from '@/helper/node';
import countNumberOfIdenticalItems from '@/helper/countNumberOfIdenticalItems';

const selectMethod = (method, grill) => {
  const getStartNode = () => {
    if (method === RECURSIVE_METHOD) {
      return new Node(0, 0);
    }
    return new Node([grill.height], [0]);
  };

  const startNode = getStartNode();
  const items = startNode.initGrill(grill);

  startNode.rect = { w: grill.width, h: grill.height };

  const getDataAfterCalculation = () => {
    if (method === RECURSIVE_METHOD) {
      return startNode.insertRectRecursiveMethod(items);
    }
    return startNode.insertRectBestMethod(items);
  };

  const data = getDataAfterCalculation();
  const outBag = countNumberOfIdenticalItems(data.outBag);

  return { data, outBag };
};

export default selectMethod;
