import { useContext } from 'react';
import { TranslateContext } from '../contexts/TranslateContext';

export const useTranslate = () => useContext(TranslateContext);
