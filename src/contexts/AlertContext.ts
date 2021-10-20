// Package imports
import { createContext } from 'react';

// Type imports
import { AlertContextProps } from '@custom-types/Alert';

export const AlertContext = createContext<Partial<AlertContextProps>>({});
