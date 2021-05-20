import React from 'react';
import { useTranslation } from 'react-i18next';

const InfoBlock = ({ state }) => {
  const { t } = useTranslation();
  return (
    <ul className="list-group mt-5">
      <li className="list-group-item d-flex justify-content-center align-items-center">
        {t('Info information')}
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('Info number of elements')}
        <span className="badge bg-info rounded-pill">{state.Bag?.length + state.info?.countOutBag || 0}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('Info number of items placed')}
        <span className="badge bg-info rounded-pill">{state.Bag?.length || 0}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {t('Info number of discarded items')}
        <span className="badge bg-info rounded-pill">{state.info?.countOutBag || 0}</span>
      </li>
    </ul>
  );
};

export default InfoBlock;
