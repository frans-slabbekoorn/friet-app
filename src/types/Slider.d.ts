// Package imports
import { RefObject, Dispatch, SetStateAction } from 'react';

// Type imports
import { InsertItem } from '@custom-types/Item';

// Ref imports
import { Modalize } from 'react-native-modalize';

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
    ref: RefObject<Modalize>;
    type: SliderType;
    setType: Dispatch<SetStateAction<SliderType>>;
    sliderContent: JSX.Element | null;
    setSliderContent: Dispatch<SetStateAction<JSX.Element | null>>;
    isLocked: boolean;
    setIsLocked: Dispatch<SetStateAction<boolean>>;
    height: number;
    setHeight: Dispatch<SetStateAction<number>>;
    currentId: string;
    setCurrentId: Dispatch<SetStateAction<string>>;
}

export interface SliderContentProps {
    updateFormState: (mutatableObject: { [key: string]: unknown }) => void;
    setSliderType: (type: SliderType) => void;
    formData: InsertItem;
    currentId: string;
    setHeight: Dispatch<SetStateAction<number>>;
}
