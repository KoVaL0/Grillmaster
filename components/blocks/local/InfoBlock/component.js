import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const InfoBlock = () => {
  const { t } = useTranslation();
  const { bag, informationOfGrillItems } = useSelector((store) => store.data);

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
        <span className="badge bg-info rounded-pill">{ bag.length + informationOfGrillItems.countOutBag || 0 }</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('common.infoblock.item.placed')}
        <span className="badge bg-info rounded-pill">{ bag.length || 0 }</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('common.infoblock.item.discarded')}
        <span className="badge bg-info rounded-pill">{ informationOfGrillItems.countOutBag || 0 }</span>
      </li>
    </ul>
  );
};

export default InfoBlock;
