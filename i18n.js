import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'common.header.title': 'GrillMaster',
      'common.language.english': 'English',
      'common.language.russian': 'Русский',
      'common.button.language': 'Lang',
      'common.button.submit': 'Submit {{method}}',
      'common.table.title': 'Items out of grill',
      'common.table.header.type': 'Type',
      'common.table.header.size': 'Size',
      'common.table.header.color': 'Color',
      'common.table.header.count': 'Count',
      'common.table.item.size': '{{width}} x {{height}}',
      'common.table.item.empty': 'Empty',
      'common.toast.submit.success': 'Success! {{date}} ms',
      'common.toast.submit.error': 'Invalid data!',
      'common.toast.submit.error.empty': 'Empty request!',
      'common.toast.submit.error.range': 'Content length exceeded!',
      'common.toast.language.success': 'Language changed successfully!',
      'common.toast.language.error': 'Error!',
      'common.infoblock.title': 'Information',
      'common.infoblock.item.count': 'Number of elements',
      'common.infoblock.item.placed': 'Number of items placed',
      'common.infoblock.item.discarded': 'Number of discarded items',
    },
  },
  ru: {
    translation: {
      'common.header.title': 'МастерГриль',
      'common.language.english': 'English',
      'common.language.russian': 'Русский',
      'common.button.language': 'Язык',
      'common.button.submit': 'Отправить {{method}}',
      'common.table.title': 'Предметы не в гриле',
      'common.table.header.type': 'Тип',
      'common.table.header.size': 'Размер',
      'common.table.header.color': 'Цвет',
      'common.table.header.count': 'Количество',
      'common.table.item.size': '{{width}} x {{height}}',
      'common.table.item.empty': 'Пусто',
      'common.toast.submit.success': 'Успех! {{date}} мс',
      'common.toast.submit.error': 'Не валидные данные!',
      'common.toast.submit.error.empty': 'Пустой запрос!',
      'common.toast.submit.error.range': 'Превышена длина содержимого!',
      'common.toast.language.success': 'Язык успешно изменен!',
      'common.toast.language.error': 'Ошибка!',
      'common.infoblock.title': 'Информация',
      'common.infoblock.item.count': 'Количество элементов',
      'common.infoblock.item.placed': 'Количество помещенных элементов',
      'common.infoblock.item.discarded': 'Количество выкинутых элементов',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
  });

export default i18n;
