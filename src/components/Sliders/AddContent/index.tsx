// Package imports
import React, { FC, useContext } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';

// Component imports
import ReviewStars from '@components/ReviewStars';
import Tags from '@components/Tags';

// Context imports
import { AlertContext } from '@contexts/AlertContext';

// Hook imports
import { useTranslate } from '@hooks/useTranslate';
import { useSlider } from '@hooks/useSlider';
import { useItems } from '@hooks/useItems';

// Function imports
import image from '@functions/image';
import { validateForm } from '@functions/validate';

// Style imports
import globalStyles from '@styles/defaults';
import { Colors } from '@styles/variables';
import styles from './styles';

// Type imports
import { SliderContentProps } from '@custom-types/Slider';
import { AlertProps } from '@custom-types/Alert';

// Custom imports
import Database from '@config/database';

/**
 * AddContent component
 *
 * Content for adding item in slider
 * @returns { JSX.Element }
 */
const AddContent: FC<SliderContentProps> = ({ setSliderType }): JSX.Element => {
    const { language } = useTranslate();
    const { setShow, setTitle, setValues } = useContext(AlertContext) as AlertProps;
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
                onChangeText={(name: string) => updateFormState({ name })}
                style={styles.itemName}
            />
            <TextInput
                defaultValue={itemFormData.location}
                placeholder={language.addLocation}
                onChangeText={(location: string) => updateFormState({ location })}
                style={styles.itemLocation}
            />
            <View style={styles.starContainer}>
                <ReviewStars stars={itemFormData.stars} starStyle={styles.star} />
                <Slider
                    step={1}
                    value={itemFormData.stars}
                    minimumValue={0}
                    maximumValue={10}
                    maximumTrackTintColor={Colors.grey}
                    minimumTrackTintColor={Colors.grey}
                    thumbTintColor={Colors.black}
                    onValueChange={stars => stars > 0 && updateFormState({ stars })}
                    style={styles.starSlider}
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
