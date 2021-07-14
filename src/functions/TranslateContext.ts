import { createContext, useContext } from 'react';

// All available languages
const translations: any = {
    nl: require('../translations/languages/nl-NL.json'),
    en: require('../translations/languages/en-EN.json'),
};

// Fallback language if no language is selected
const fallbackLanguage: {} = translations.nl;

export const TranslateContext = createContext<any>(fallbackLanguage);

export const useTranslateContext = () => useContext(TranslateContext);
