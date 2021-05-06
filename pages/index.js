import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import sampleDate from '../public/sample-data.json';
import { setNewData } from '../redux/actions';
import Canvas from '../components/Canvas';
import TableOutItems from '../components/TableOutItems';
import InputForm from '../components/InputForm';
import Header from '../components/Header';

export default function Home() {
  const [data, setData] = useState(JSON.stringify(sampleDate, null, 2));
  const [outItems, setOutItems] = useState([]);
  const [grillItems, setGrillItems] = useState([]);
  const dispatch = useDispatch();

  function handlerSubmit(e) {
    e.preventDefault();
    dispatch(setNewData(JSON.parse(data)));
    fetch('/api/placingItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()).then(({ Bag, outBag }) => {
      setGrillItems(Bag);
      setOutItems(outBag);
    });
  }

  return (
    <div className="container">
      <Header title="Grillmaster" />
      <div className="row px-3">
        <div className="col">
          <div className="d-flex mb-3 justify-content-center">
            <Canvas grillItems={grillItems} />
          </div>
          <div>
            <InputForm handlerSubmit={handlerSubmit} data={data} setData={setData} />
          </div>
        </div>
        <div className="col-3">
          <TableOutItems outItems={outItems} />
        </div>
      </div>
    </div>
  );
}
