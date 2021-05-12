import React from 'react';
import { useTranslation } from 'react-i18next';

const InputForm = ({
  handlerSubmit, data, setData, loading,
}) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={(e) => handlerSubmit(e)}>
      <div className="form-group">
        <textarea
          className="form-control"
          rows={20}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <input
        disabled={loading}
        type="submit"
        className="btn btn-success"
        value={loading ? t('Button loading') : t('Button submit')}
      />
    </form>
  );
};

export default InputForm;
