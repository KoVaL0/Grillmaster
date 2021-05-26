import { selectMethod } from '@helper/selectMethod';
import Timer from '@helper/timer';

export default function placingItems(req, res) {
  try {
    const { method } = req.query;
    const { grill } = JSON.parse(req.body.payload);
    const date = new Timer();
    const { data, outBag } = selectMethod(method, grill);

    res.json({ bag: data.bag, outBag, date: date.finishTimer() });
  } catch (e) {
    res.status(500).json({
      status: 'error',
    });
  }
}
