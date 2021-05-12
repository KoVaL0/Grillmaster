import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sampleDate from '@public/sample-data.json';
import Canvas from '@components/Canvas';
import TableOutItems from '@components/TableOutItems';
import InputForm from '@components/InputForm';
import Header from '@components/Header';
import { placingItems, setNewData } from '@redux/actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [data, setData] = useState(JSON.stringify(sampleDate, null, 2));
  const dispatch = useDispatch();
  const state = useSelector((store) => store.data);
  const { t } = useTranslation();

  function handlerSubmit(e) {
    e.preventDefault();
    dispatch(setNewData(JSON.parse(data)));
    dispatch(placingItems('/api/placingItems', data));
  }

  return (
    <div className="container">
      <Header title={t('Header title')} />
      <div className="row px-3">
        <div className="col">
          <div className="d-flex mb-3 justify-content-center">
            <Canvas grillItems={state.Bag} />
          </div>
          <div>
            <InputForm
              handlerSubmit={handlerSubmit}
              data={data}
              setData={setData}
              loading={state.loading}
            />
          </div>
        </div>
        <div className="col-3">
          <TableOutItems outItems={state.outBag} />
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
