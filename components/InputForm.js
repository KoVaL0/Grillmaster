import React from 'react';
import { placingItems, setNewData } from '@redux/actions';
import { useDispatch } from 'react-redux';
import ButtonSubmit from '@components/ButtonSubmit';

const InputForm = ({ data, setData, loading }) => {
  const dispatch = useDispatch();
  function handlerButton(e, method) {
    e.preventDefault();
    dispatch(setNewData(JSON.parse(data)));
    dispatch(placingItems(`/api/placingItemsMethod${method}`, data));
  }
  return (
    <form>
      <div className="form-group">
        <textarea
          className="form-control"
          rows={20}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <ButtonSubmit loading={loading} handlerButton={handlerButton} method={1} />
      <ButtonSubmit loading={loading} handlerButton={handlerButton} method={2} />
      <ButtonSubmit loading={loading} handlerButton={handlerButton} method={3} />
      <ButtonSubmit loading={loading} handlerButton={handlerButton} method={4} />
    </form>
  );
};

export default InputForm;
