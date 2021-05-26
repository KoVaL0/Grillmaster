import React from 'react';
import { useTranslation } from 'react-i18next';

const ButtonSubmit = ({ loading, handleButton, method }) => {
  const { t } = useTranslation();

  return (
    <input
      type="submit"
      disabled={loading}
      onClick={handleButton(method)}
      className="btn btn-success mr-3"
      value={t('Button submit', { method })}
    />
  );
};

export default ButtonSubmit;
