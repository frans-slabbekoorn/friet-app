// Package imports
import React, { FC } from 'react';
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';

// Component imports
import ChooseSliderContent from '@components/ChooseSliderContent';

// Hook imports
import { useTranslate } from '@hooks/useTranslate';
import { useSlider } from '@hooks/useSlider';

/**
 * ChooseImageContent component
 * 
 * @returns { JSX.Element }
 */
const ChooseImageContent: FC = (): JSX.Element => {
    const { language } = useTranslate();
    const { setSliderType, updateFormState } = useSlider();

    const handleImageSubmit = (res: ImagePickerResponse) => {
        if (res.didCancel || res.errorCode || res.errorMessage || !res.assets) return;

        if (res.assets.length) {
            updateFormState({ image_url: res.assets[0].uri || null });
            setSliderType('add');
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
                        setSliderType('add');
                    }
                },
            ]}
        />
    );
};

export default ChooseImageContent;
