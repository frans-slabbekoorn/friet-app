// Package imports
import { useContext } from 'react';

// Context imports
import { SliderContext } from '@contexts/SliderContext';

// Type imports
import { SliderContent } from '@custom-types/Slider';

export const useSlider = (): SliderContent => useContext(SliderContext);
