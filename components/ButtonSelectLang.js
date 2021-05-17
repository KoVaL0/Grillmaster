import React from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const ButtonSelectLang = ({ show, setShow }) => {
  const { t, i18n } = useTranslation();
  const handlerBlur = () => {
    setTimeout(() => {
      setShow(false);
    }, 100);
  };

  const handlerSelectLang = (lang) => {
    i18n.changeLanguage(lang);
    toast.success(t('Toast success'));
  };

  return (
    <div className="btn-group h-50 my-auto" role="group">
      <button
        id="btnGroupDrop1"
        type="button"
        className={`btn btn-sm btn-info dropdown-toggle ${show ? 'show' : null}`}
        data-bs-toggle="dropdown"
        aria-expanded={show}
        onClick={() => setShow(!show)}
        onBlur={() => handlerBlur()}
      >
        {t('Button language')}
      </button>
      <ul className={`dropdown-menu ${show ? 'show' : null}`} aria-labelledby="btnGroupDrop1">
        <li>
          <button type="button" className="dropdown-item" onClick={() => handlerSelectLang('en')}>English</button>
        </li>
        <li>
          <button type="button" className="dropdown-item" onClick={() => handlerSelectLang('ru')}>Русский</button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonSelectLang;
