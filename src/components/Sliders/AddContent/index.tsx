// Package imports
import React, { FC, useContext } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

// Component imports
import ReviewStars from '@components/ReviewStars';
import Tags from '@components/Tags';

// Context imports
import { SliderContext } from '@contexts/SliderContext';
import { AlertContext } from '@contexts/AlertContext';

// Hook imports
import { useTranslate } from '@hooks/useTranslate';
import { useItems } from '@hooks/useItems';

// Function imports
import image from '@functions/image';
import { validateForm } from '@functions/validate';

// Style imports
import globalStyles from '@styles/defaults';
import { Colors } from '@styles/variables';
import styles from './styles';

// Type imports
import { SliderContextProps } from '@custom-types/Slider';
import { AlertContextProps } from '@custom-types/Alert';

// Custom imports
import Database from '@config/database';

/**
 * AddContent component
 *
 * Content for adding item in slider
 * @returns { JSX.Element }
 */
const AddContent: FC = (): JSX.Element => {
    const { language } = useTranslate();
    const { setShow, setTitle, setValues } = useContext(AlertContext) as AlertContextProps;
    const { setSliderType } = useContext(SliderContext) as SliderContextProps;
    const { refreshItems, itemFormData, updateFormState } = useItems();
    const db = new Database();

    const handleError = (key: string): void => {
        setShow(true);
        setTitle(language[key + 'Missing']);
        setValues([
            {
                title: language.cancel,
                onPress: () => {
                    setSliderType('add');
                    setShow(false);
                },
            },
        ]);
        setSliderType('null');
    };

    const handleSuccess = async (): Promise<void> => {
        await db.insertItem(itemFormData);
        refreshItems();
        setSliderType('null');
        updateFormState({
            name: '',
            location: '',
            stars: 6,
            image_url: null,
            positives: [],
            negatives: [],
        });
    };

    const handleSubmit = (): void => {
        validateForm(itemFormData, ['name', 'location'], handleError, handleSuccess);
    };

    return (
        <View style={styles.addSliderContainer}>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.imageContainer}
                onPress={() => setSliderType('chooseImage')}>
                <Image
                    source={
                        itemFormData.image_url
                            ? { uri: itemFormData.image_url }
                            : image.icons.defaultIcon
                    }
                    style={styles.image}
                />
            </TouchableOpacity>
            <TextInput
                defaultValue={itemFormData.name}
                placeholder={language.addName}
                onEndEditing={({ nativeEvent: { text } }) => updateFormState({ name: text })}
                style={styles.itemName}
            />
            <TextInput
                defaultValue={itemFormData.location}
                placeholder={language.addLocation}
                onEndEditing={({ nativeEvent: { text } }) => updateFormState({ location: text })}
                style={styles.itemLocation}
            />
            <View style={styles.starContainer}>
                <ReviewStars stars={itemFormData.stars} starStyle={styles.star} />
                <MultiSlider
                    values={[itemFormData.stars]}
                    sliderLength={250}
                    onValuesChangeFinish={(values: number[]) =>
                        updateFormState({ stars: values[0] > 0 ? values[0] : 1 })
                    }
                    selectedStyle={{ backgroundColor: Colors.grey }}
                    markerStyle={{ backgroundColor: Colors.black }}
                    customMarker={() => (
                        <View style={styles.sliderMarkerContainer}>
                            <View style={styles.sliderMarker} />
                        </View>
                    )}
                    markerContainerStyle={styles.sliderContainerStyle}
                />
            </View>
            <Tags
                title={language.positives}
                defaultValue={itemFormData.positives}
                editable
                onValueChange={(positives: string[]) => updateFormState({ positives })}
            />
            <Tags
                title={language.negatives}
                defaultValue={itemFormData.negatives}
                editable
                onValueChange={(negatives: string[]) => updateFormState({ negatives })}
            />
            <TouchableOpacity
                style={[globalStyles.button, styles.buttonPos]}
                onPress={handleSubmit}>
                <Image source={image.miscellaneous.done} style={globalStyles.buttonIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default AddContent;
