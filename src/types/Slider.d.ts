// Package imports
import { Dispatch, SetStateAction } from 'react';

// Type imports
import { InsertItem } from '@custom-types/Item';

export type SliderType = 'view' | 'edit' | 'add' | 'chooseImage' | 'null';

export interface SliderContent {
    setSliderType: (value: SliderType) => void;
    setCurrentId: (id: string) => void;
    updateFormState: (mutatableObject: { [key: string]: unknown }) => void;
    closeSlider: () => void;
    formData: InsertItem;
    previousType: SliderType;
}

export interface SliderContextProps {
    setSliderType: Dispatch<SetStateAction<SliderType>>;
    currentId: string;
    setCurrentId: Dispatch<SetStateAction<string>>;
}
