import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const InfoBlock = () => {
  const { t } = useTranslation();
  const { bag, info } = useSelector((store) => store.data);

  return (
    <ul className="list-group mt-5">
      <li className="list-group-item d-flex justify-content-center align-items-center">
        {t('Info information')}
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('Info number of elements')}
        <span className="badge bg-info rounded-pill">{ bag?.length + info?.countOutBag || 0 }</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('Info number of items placed')}
        <span className="badge bg-info rounded-pill">{ bag?.length || 0 }</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('Info number of discarded items')}
        <span className="badge bg-info rounded-pill">{ info?.countOutBag || 0 }</span>
      </li>
    </ul>
  );
};

export default InfoBlock;
