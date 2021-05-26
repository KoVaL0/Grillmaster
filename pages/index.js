import { placingItems, setNewStore } from '@redux/actions';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import Canvas from '@components/Canvas';
import TableOutItems from '@components/TableOutItems';
import InputForm from '@components/InputForm';
import Header from '@components/Header';
import InfoBlock from '@components/InfoBlock';

import 'react-toastify/dist/ReactToastify.css';
import sampleDate from '@public/sample-data.json';

export default function Home() {
  const DEFAULT_DATA = JSON.stringify(sampleDate, null, 2);
  const state = useSelector((store) => store.data);
  const [data, setData] = useState(DEFAULT_DATA);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleButton = (method) => (e) => {
    e.preventDefault();
    dispatch(setNewStore(JSON.parse(data)));
    dispatch(placingItems(`/api/placingItems?method=${method}`, data));
  };

  return (
    <div className="container">
      <Header title={t('Header title')} />
      <div className="row px-3">
        <div className="col">
          <div className="d-flex mb-3 justify-content-center">
            <Canvas grillItems={state.bag} />
          </div>
          <div>
            <InputForm
              data={data}
              setData={setData}
              loading={state.loading}
              handleButton={handleButton}
            />
          </div>
        </div>
        <div className="col-4">
          <TableOutItems />
          <InfoBlock />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
      />
    </div>
  );
}
