import React from 'react';

const InputForm = ({
  handlerSubmit, data, setData, loading,
}) => (
  <form onSubmit={(e) => handlerSubmit(e)}>
    <div className="form-group">
      <textarea
        className="form-control"
        rows={20}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
    {console.log(loading)}
    <input
      disabled={loading}
      type="submit"
      className="btn btn-success"
      value={loading ? 'loading...' : 'submit'}
    />
  </form>
);

export default InputForm;
