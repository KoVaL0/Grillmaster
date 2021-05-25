import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import classNames from 'classnames';

const MenuSelectLang = () => {
  const [onShow, setShow] = useState(false);
  const { t, i18n } = useTranslation();

  const handleBlur = () => {
    setTimeout(() => {
      setShow(false);
    }, 100);
  };

  const toggleSelectLang = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      toast.success(t('Toast success'));
    });
  };

  const btnClass = classNames('btn', 'btn-sm', 'btn-info', 'dropdown-toggle', {
    show: onShow,
  });

  const ulDropdownClass = classNames('dropdown-menu', {
    show: onShow,
  });

  return (
    <div className="btn-group h-50 my-auto" role="group">
      <button
        id="btnGroupDrop"
        type="button"
        className={btnClass}
        data-bs-toggle="dropdown"
        aria-expanded={onShow}
        onClick={() => setShow((prev) => !prev)}
        onBlur={() => handleBlur()}
      >
        { t('Button language') }
      </button>
      <ul className={ulDropdownClass} aria-labelledby="btnGroupDrop">
        <li>
          <button
            type="button"
            className="dropdown-item"
            onClick={() => toggleSelectLang('en')}
          >
            { t('Language english') }
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item"
            onClick={() => toggleSelectLang('ru')}
          >
            { t('Language russian') }
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MenuSelectLang;
