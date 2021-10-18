import React, { createContext, useState, useEffect, FC } from 'react';
import { fallbackLanguage, getLanguage } from '../translations';

interface Props {
    children: JSX.Element;
}

const TranslateContext = createContext({
    // Fallback language if no language is selected.
    language: fallbackLanguage,
});

/**
 * TranslateProvider
 *
 * @param { Object } Children screen
 * @returns { JSX.Element } TranslateContext.Provider
 */
const TranslateProvider: FC<Props> = ({ children }): JSX.Element => {
    const [language, setLanguage] = useState<{ [key: string]: string }>(fallbackLanguage);

    useEffect(() => {
        fetchLanguage();
    });

    const fetchLanguage = async () => {
        setLanguage(await getLanguage());
    };

    return <TranslateContext.Provider value={{ language }}>{children}</TranslateContext.Provider>;
};

export { TranslateProvider, TranslateContext };
