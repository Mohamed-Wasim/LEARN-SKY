import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en.json"; // Import your translation files
// import translationES from './lang/es.json';

const resources = {
  en: {
    translation: translationEN
  }
};

i18n.use(initReactI18next).init(
  {
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
      useSuspense: false
    }
  },
  (err, t) => {
    if (err) {
      console.error("i18n initialization error:", err);
    }
    console.log("i18n initialized successfully");
  }
);

export default i18n;
