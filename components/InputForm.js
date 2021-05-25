import React from 'react';

import ButtonSubmit from '@components/ButtonSubmit';

const InputForm = ({
  loading, data, setData, handleButton,
}) => (
  <form>
    <div className="form-group">
      <textarea
        className="form-control"
        rows={20}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
    <ButtonSubmit loading={loading} handleButton={handleButton} method="RecursiveMethod" />
    <ButtonSubmit loading={loading} handleButton={handleButton} method="BestMethod" />
  </form>
);

export default InputForm;
