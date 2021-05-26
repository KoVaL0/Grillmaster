import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import classNames from 'classnames';

const MenuSelectLang = () => {
  const [onShow, setShow] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleSelectLang = useCallback((lang) => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang).then(() => {
        toast.success(t('Toast success'));
      });
    }
  }, [t, i18n]);

  const handleClickMenu = () => {
    setShow((prevState) => !prevState);
  };

  const handleBlur = () => {
    setShow(false);
  };

  const btnClass = classNames('btn', 'btn-sm', 'btn-info', 'dropdown-toggle', {
    show: onShow,
  });

  const ulDropdownClass = classNames('dropdown-menu', {
    show: onShow,
  });

  return (
    <div
      className="btn-group h-50 my-auto"
      role="group"
    >
      <button
        id="btnGroupDrop"
        type="button"
        className={btnClass}
        data-bs-toggle="dropdown"
        aria-expanded={onShow}
        onBlur={handleBlur}
        onClick={handleClickMenu}
      >
        { t('Button language') }
      </button>
      <ul
        className={ulDropdownClass}
        aria-labelledby="btnGroupDrop"
      >
        <li>
          <button
            type="button"
            className="dropdown-item"
            onMouseDown={() => toggleSelectLang('en')}
          >
            { t('Language english') }
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item"
            onMouseDown={() => toggleSelectLang('ru')}
          >
            { t('Language russian') }
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MenuSelectLang;
