// getTranslations.js
import { fr } from "./locales/fr";
import { en } from "./locales/en";

export default function getTranslations(locale) {
  switch (locale) {
    case "fr":
      return fr;
    case "en":
      return en;
    default:
      return fr;
  }
}
