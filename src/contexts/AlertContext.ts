import { createContext } from 'react';
import { AlertProps as AlertContextProps } from '../types/Alert';

export const AlertContext = createContext<Partial<AlertContextProps>>({});
