import React from 'react';
import { useDispatch } from 'react-redux';

import SubmitButton from '@/components/controls/SubmitButton';
import { placingItems } from '@/redux/actions';
import { BEST_METHOD, RECURSIVE_METHOD } from '@/constants';

const InputForm = ({
  loading, data, setData,
}) => {
  const dispatch = useDispatch();

  const handleButton = (method) => (e) => {
    e.preventDefault();
    dispatch(placingItems(`/api/placingItems?method=${method}`, data));
  };

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
      <SubmitButton loading={loading} handleButton={handleButton} method={RECURSIVE_METHOD} />
      <SubmitButton loading={loading} handleButton={handleButton} method={BEST_METHOD} />
    </form>
  );
};

export default InputForm;
