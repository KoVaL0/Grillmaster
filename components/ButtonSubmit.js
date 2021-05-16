import React from 'react';
import { useTranslation } from 'react-i18next';

const ButtonSubmit = ({ loading, handlerButton, method }) => {
  const { t } = useTranslation();
  return (
    <input
      type="submit"
      disabled={loading}
      onClick={(e) => handlerButton(e, method)}
      className="btn btn-success mr-3"
      value={loading ? t('Button loading') : `${t('Button submit')} ${method}`}
    />
  );
};

export default ButtonSubmit;
