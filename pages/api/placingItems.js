import selectPlacingAlgorithm from '@/utilities/selectPlacingAlgorithm';
import Timer from '@/utilities/timer';
import { MAX_CONTENT_LENGTH } from '@/constants';

export default function placingItems(req, res) {
  try {
    if (!req.body.payload) {
      throw new Error();
    }

    if (req.body.payload.length > MAX_CONTENT_LENGTH) {
      throw new RangeError();
    }

    const { method } = req.query;
    const { grill } = JSON.parse(req.body.payload);
    const timer = new Timer();
    const { data, outBag } = selectPlacingAlgorithm(method, grill);

    res.json({ bag: data.bag, outBag, date: timer.stop() });
  } catch (e) {
    if (e.name === 'SyntaxError') {
      res.status(415).json({
        message: 'common.toast.submit.error',
      });
    }

    if (e.name === 'RangeError') {
      res.status(413).json({
        message: 'common.toast.submit.error.range',
      });
    }

    if (e.name === 'Error') {
      res.status(412).json({
        message: 'common.toast.submit.error.empty',
      });
    }
  }
}
