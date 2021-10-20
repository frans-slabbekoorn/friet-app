// Package imports
import { createContext } from 'react';

// Type imports
import { SliderContextProps } from '@custom-types/Slider';

export const SliderContext = createContext<Partial<SliderContextProps>>({});
