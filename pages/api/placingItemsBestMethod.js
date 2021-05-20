import Timer from '@helper/timer';
import OutBagSort from '@helper/outBagSort';
import Node from '@helper/node';

export default function placingItemsBestMethod(req, res) {
  try {
    const { grill } = JSON.parse(req.body);
    const date = new Timer();
    const startNode = new Node([grill.height], [0]);
    const items = startNode.initGrill(grill);
    startNode.rect = { w: grill.width, h: grill.height };
    const data = startNode.insertRectBestMethod(items);
    const outBag = new OutBagSort(data.outBag).findUniqElem();
    res.json({ Bag: data.Bag, outBag, date: date.finishTimer() });
  } catch (e) {
    console.log(e);
  }
}