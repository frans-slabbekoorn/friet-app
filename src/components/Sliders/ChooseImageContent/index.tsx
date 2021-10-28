// Package imports
import React, { FC, useContext } from 'react';
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';

// Component imports
import ChooseSliderContent from '@components/Sliders/ChooseContent';

// Context imports
import { SliderContext } from '@contexts/SliderContext';
import { ItemContext } from '@contexts/ItemContext';

// Hook imports
import { useTranslate } from '@hooks/useTranslate';

// Type imports
import { SliderContextProps } from '@custom-types/Slider';
import { useItems } from '@hooks/useItems';

/**
 * ChooseImageContent component
 *
 * @returns { JSX.Element }
 */
const ChooseImageContent: FC = (): JSX.Element => {
    const { language } = useTranslate();
    const { setSliderType, previousSliderType } = useContext(SliderContext) as SliderContextProps;
    const { updateFormState } = useItems();

    const handleImageSubmit = (res: ImagePickerResponse) => {
        if (res.didCancel || res.errorCode || res.errorMessage || !res.assets) return;

        if (res.assets.length) {
            updateFormState({ image_url: res.assets[0].uri || null });
            setSliderType(previousSliderType);
        }
    };

    return (
        <ChooseSliderContent
            values={[
                {
                    title: language.takePhoto,
                    onPress: () => {
                        launchCamera({ mediaType: 'photo', saveToPhotos: true }, handleImageSubmit);
                    },
                },
                {
                    title: language.choosePhoto,
                    onPress: () => {
                        launchImageLibrary(
                            { mediaType: 'photo', maxWidth: 300, maxHeight: 300 },
                            handleImageSubmit,
                        );
                    },
                },
                {
                    title: language.cancel,
                    warning: true,
                    onPress: () => {
                        setSliderType(previousSliderType);
                    },
                },
            ]}
        />
    );
};

export default ChooseImageContent;
