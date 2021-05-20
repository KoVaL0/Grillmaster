import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Header title': 'GrillMaster',
      'Button language': 'Lang',
      'Button submit': 'Submit',
      'Button loading': 'loading...',
      'Items out': 'Items out of grill',
      'Type item': 'Type',
      'Size item': 'Size',
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
      'Button language': 'Язык',
      'Button submit': 'Отправить',
      'Button loading': 'Загрузка...',
      'Items out': 'Предметы не в гриле',
      'Type item': 'Тип',
      'Size item': 'Размер',
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

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
