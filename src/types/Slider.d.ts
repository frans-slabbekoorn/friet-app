// Package imports
import { Dispatch, SetStateAction } from 'react';

// Type imports
import { Item } from '@custom-types/Item';

export type SliderType = 'view' | 'edit' | 'add' | 'chooseImage' | 'options' | 'null';

export interface SliderContent {
    setSliderType: (value: SliderType) => void;
    setCurrentId: (id: string) => void;
    updateFormState: (mutatableObject: { [key: string]: unknown }) => void;
    closeSlider: () => void;
    formData: Item;
    previousType: SliderType;
}

export interface SliderContextProps {
    setSliderType: (type: SliderType) => void;
    previousSliderType: SliderType;
    currentId: string;
    setCurrentId: Dispatch<SetStateAction<string>>;
}
