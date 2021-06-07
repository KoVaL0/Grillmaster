import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import classNames from 'classnames';

const LanguageSelector = () => {
  const [isShowDropdownMenu, setShowDropdownMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleSelectLang = useCallback((e) => {
    const { language } = e.target.dataset;
    if (i18n.language !== language) {
      i18n.changeLanguage(language).then(() => {
        toast.success(t('common.toast.language.success'));
      }).catch(() => {
        toast.error(t('common.toast.language.error'));
      });
    }
  }, [t, i18n]);

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
            data-language="en"
            onMouseDown={toggleSelectLang}
          >
            { t('common.language.english') }
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item"
            data-language="ru"
            onMouseDown={toggleSelectLang}
          >
            { t('common.language.russian') }
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
