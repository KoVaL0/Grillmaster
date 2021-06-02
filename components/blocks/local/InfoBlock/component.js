import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const InfoBlock = () => {
  const { t } = useTranslation();
  const { bag, statisticOutBag } = useSelector((store) => store.data);

  const countTotalItems = useCallback(() => {
    const totalCount = bag.length + statisticOutBag.countOutBag;
    return totalCount;
  }, [bag.length, statisticOutBag.countOutBag]);

  if (bag.length === 0) {
    return null;
  }

  return (
    <ul className="list-group mt-5">
      <li className="list-group-item d-flex justify-content-center align-items-center">
        {t('common.infoblock.title')}
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('common.infoblock.item.count')}
        <span className="badge bg-info rounded-pill">{ countTotalItems() }</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('common.infoblock.item.placed')}
        <span className="badge bg-info rounded-pill">{ bag.length }</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('common.infoblock.item.discarded')}
        <span className="badge bg-info rounded-pill">{ statisticOutBag.countOutBag }</span>
      </li>
    </ul>
  );
};

export default InfoBlock;
