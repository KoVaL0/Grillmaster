import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import classNames from 'classnames';

const LanguageSelector = () => {
  const [isShowDropdownMenu, setShowDropdownMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleSelectLang = useCallback((lang) => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang).then(() => {
        toast.success(t('common.toast.language.success'));
      }).catch(() => {
        toast.error(t('common.toast.language.error'));
      });
    }
  }, [t, i18n]);

  const handleClickSelectLang = (lang) => () => {
    toggleSelectLang(lang);
  };

  const handleClickMenu = () => {
    setShowDropdownMenu((prevState) => !prevState);
  };

  const handleBlur = () => {
    setShowDropdownMenu(false);
  };

  const btnClass = classNames('btn', 'btn-sm', 'btn-info', 'dropdown-toggle', {
    show: isShowDropdownMenu,
  });

  const ulDropdownClass = classNames('dropdown-menu', {
    show: isShowDropdownMenu,
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
        aria-expanded={isShowDropdownMenu}
        onBlur={handleBlur}
        onClick={handleClickMenu}
      >
        { t('common.button.language') }
      </button>
      <ul
        className={ulDropdownClass}
        aria-labelledby="btnGroupDrop"
      >
        <li>
          <button
            type="button"
            className="dropdown-item"
            onMouseDown={handleClickSelectLang('en')}
          >
            { t('common.language.english') }
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item"
            onMouseDown={handleClickSelectLang('ru')}
          >
            { t('common.language.russian') }
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
