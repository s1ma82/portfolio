import i18n from "i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import * as RU from './locales/ru/translation.json'
import * as EN from './locales/en/translation.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: RU
            },
            en: {
                translation: EN
            }
        },
        lng: 'ru',
        supportedLngs: ['ru', 'en'],
        fallbackLng: 'ru',
        debug: false,
        detection: {  
            order: ["cookie", "localStorage"],
            caches: ["cookie", "localStorage"]
        },
        interpolation: {
            escapeValue: false
        }
        

    })
export default i18n