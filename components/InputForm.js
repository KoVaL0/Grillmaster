import React from 'react';

const InputForm = ({handlerSubmit, data, setData}) => {

  return (
    <form onSubmit={e => handlerSubmit(e)}>
      <div className="form-group">
                <textarea
                  className="form-control"
                  rows={20}
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
      </div>
      <input type='submit' className="btn btn-success" value='submit'/>
    </form>
  );
};

export default InputForm;