import { useContext } from 'react';
import { SliderContext } from '../contexts/SliderContext';
import { SliderContent } from '../types/SliderContent';

export const useSlider = (): SliderContent => useContext(SliderContext);
