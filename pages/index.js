import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import SvgCanvas from '@/components/blocks/local/SvgCanvas';
import OutOfGrillItems from '@/components/blocks/local/OutOfGrillItems';
import InputForm from '@/components/controls/InputForm';
import Header from '@/components/blocks/global/Header';
import InfoBlock from '@/components/blocks/local/InfoBlock';

import 'react-toastify/dist/ReactToastify.css';
import sampleDate from '@/public/sample-data.json';

const DEFAULT_DATA = JSON.stringify(sampleDate, null, 2);

export default function Home() {
  const [data, setData] = useState(DEFAULT_DATA);
  const state = useSelector((store) => store.data);
  const { t } = useTranslation();

  return (
    <div className="container">
      <Header title={t('common.header.title')} />
      <div className="row px-3">
        <div className="col">
          <div className="d-flex mb-3 justify-content-center">
            <SvgCanvas grillItems={state.bag} />
          </div>
          <div>
            <InputForm
              data={data}
              setData={setData}
              loading={state.loading}
            />
          </div>
        </div>
        <div className="col-4">
          <OutOfGrillItems />
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
