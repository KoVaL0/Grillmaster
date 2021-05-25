import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Header title': 'GrillMaster',
      'Language english': 'English',
      'Language russian': 'Русский',
      'Button language': 'Lang',
      'Button submit': 'Submit {{method}}',
      'Items out': 'Items out of grill',
      'Type item': 'Type',
      'Size item': 'Size',
      'Size params': '{{width}} x {{height}}',
      'Color item': 'Color',
      'Count item': 'Count',
      'Empty item': 'Empty',
      'Toast success': 'Success!',
      'Info information': 'Information',
      'Info number of elements': 'Number of elements',
      'Info number of items placed': 'Number of items placed',
      'Info number of discarded items': 'Number of discarded items',
    },
  },
  ru: {
    translation: {
      'Header title': 'МастерГриль',
      'Language english': 'English',
      'Language russian': 'Русский',
      'Button language': 'Язык',
      'Button submit': 'Отправить {{method}}',
      'Items out': 'Предметы не в гриле',
      'Type item': 'Тип',
      'Size item': 'Размер',
      'Size params': '{{width}} x {{height}}',
      'Color item': 'Цвет',
      'Count item': 'Количество',
      'Empty item': 'Пусто',
      'Toast success': 'Успех!',
      'Info information': 'Информация',
      'Info number of elements': 'Количество элементов',
      'Info number of items placed': 'Количество помещенных элементов',
      'Info number of discarded items': 'Количество выкинутых элементов',
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
