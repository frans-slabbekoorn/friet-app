// Package imports
import { SetStateAction } from 'react';

// Component imports
import AddContent from '@components/Sliders/AddContent';
import ViewContent from '@components/Sliders/ViewContent';
import ChooseImageContent from './ChooseImageContent';

const sliderComponents: { [key: string]: SetStateAction<Element | null> } = {
    add: AddContent,
    view: ViewContent,
    chooseImage: ChooseImageContent,
};

export default sliderComponents;
