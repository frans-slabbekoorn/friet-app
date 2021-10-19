// Package imports
import { createContext } from 'react';

// Type imports
import { ItemContextProps } from '@custom-types/Item';

export const ItemContext = createContext<Partial<ItemContextProps>>({});
