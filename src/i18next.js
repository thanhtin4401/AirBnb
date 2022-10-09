import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './i18next/locales/en.json';
import translationVN from './i18next/locales/vn.json';

const resources = {
  EN: {
    translation: translationEN,
  },
  VN: {
    translation: translationVN,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'EN',
    keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
