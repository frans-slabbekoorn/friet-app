// Package imports
import { useContext } from 'react';

// Context imports
import { TranslateContext } from '@contexts/TranslateContext';

export const useTranslate = () => useContext(TranslateContext);
