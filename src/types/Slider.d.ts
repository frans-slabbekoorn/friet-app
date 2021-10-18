import { FormData } from './Form';

export type SliderType = 'view' | 'edit' | 'add' | 'chooseImage' | 'null';

export interface SliderContent {
    setSliderType: (value: SliderType) => void;
    setCurrentId: (id: string) => void;
    updateFormState: (mutatableObject: { [key: string]: unknown }) => void;
    closeSlider: () => void;
    formData: FormData;
    previousType: SliderType;
}
