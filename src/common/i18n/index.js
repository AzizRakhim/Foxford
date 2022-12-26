import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ru, uz } from "../languages";

// the translations
// (tip move them in a JSON file and import them)

const resources = {
  en,
  ru,
  uz,
};

const lang = localStorage.getItem("lang");

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: lang || "en",
    fallbackLng: "enVB",

    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
