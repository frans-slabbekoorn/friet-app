// Package imports
import React, { FC, SetStateAction } from 'react';

// Component imports
import AddContent from '@components/Sliders/AddContent';
import ViewContent from '@components/Sliders/ViewContent';
import ChooseImageContent from '@components/Sliders/ChooseImageContent';
import OptionsContent from '@components/Sliders/OptionsContent';

// Type imports
import { SliderType } from '@custom-types/Slider';

interface Props {
    type: SliderType;
}

/**
 * SliderContent component
 *
 * @param { Props }
 * @returns { JSX.Element }
 */
const SliderContent: FC<Props> = ({ type }): JSX.Element | null => {
    const sliderComponents: { [key: string]: SetStateAction<Element> } = {
        add: AddContent,
        view: ViewContent,
        chooseImage: ChooseImageContent,
        options: OptionsContent,
    };
    const Content = sliderComponents[type] as any;

    return Content ? <Content /> : null;
};

export default SliderContent;
