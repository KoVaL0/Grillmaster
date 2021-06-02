import { BEST_METHOD, RECURSIVE_METHOD } from '@/constants';
import Node from '@/utilities/node';
import numberOfIdenticalItems from '@/utilities/numberOfIdenticalItems';

const selectPlacingAlgorithm = (method, grill) => {
  const startNode = new Node();
  startNode.rect = { w: grill.width, h: grill.height };

  switch (method) {
    case RECURSIVE_METHOD: {
      const items = startNode.init(grill);
      const data = startNode.insertRectRecursiveMethod(items);
      const outBag = numberOfIdenticalItems(data.outBag);
      return { data, outBag };
    }
    case BEST_METHOD: {
      const items = startNode.initBestMethod(grill);
      const data = startNode.insertRectBestMethod(items);
      const outBag = numberOfIdenticalItems(data.outBag);
      return { data, outBag };
    }
    default: {
      return null;
    }
  }
};

export default selectPlacingAlgorithm;
