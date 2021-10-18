import 'react-native-get-random-values';
import React, { FC, useContext, useEffect } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';
import ReviewStars from '../ReviewStars';
import Tags from '../Tags';
import styles from './styles';
import globalStyles, { Colors } from '../../styles';
import { useTranslate } from '../../hooks/useTranslate';
import { useSlider } from '../../hooks/useSlider';
import Database from '../../database';
import image from '../../functions/image';
import { AlertContext } from '../../contexts/AlertContext';
import { AlertProps } from '../../types/Alert';

const AddSliderContent: FC = () => {
    const { language } = useTranslate();
    const { show, setShow } = useContext(AlertContext) as AlertProps;
    const { setSliderType, updateFormState, formData } = useSlider();
    const db = new Database();

    const handleSubmit = async () => {
        await db.insertItem(formData);
        setSliderType('null');
    };

    return (
        <View style={styles.addSliderContainer}>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.imageContainer}
                onPress={() => setSliderType('chooseImage')}>
                <Image
                    source={
                        formData.image_url ? { uri: formData.image_url } : image.icons.defaultIcon
                    }
                    style={styles.image}
                />
            </TouchableOpacity>
            <TextInput
                defaultValue={formData.name}
                placeholder={language.addName}
                onChangeText={(name: string) => updateFormState({ name })}
                style={styles.itemName}
            />
            <TextInput
                defaultValue={formData.location}
                placeholder={language.addLocation}
                onChangeText={(location: string) => updateFormState({ location })}
                style={styles.itemLocation}
            />
            <View style={styles.starContainer}>
                <ReviewStars stars={formData.stars || 6} starStyle={styles.star} />
                <Slider
                    step={1}
                    value={formData.stars || 6}
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
                defaultValue={formData.positives}
                editable
                onValueChange={(positives: string[]) => updateFormState({ positives })}
            />
             <Tags 
                title={language.negatives}
                defaultValue={formData.negatives}
                editable
                onValueChange={(negatives: string[]) => updateFormState({ negatives })}
            />
            <TouchableOpacity 
                style={{ ...globalStyles.button, ...styles.buttonPos }}
                onPress={handleSubmit}
            >
                <Image source={image.miscellaneous.done} style={globalStyles.buttonIcon} />
            </TouchableOpacity>
        </View>
    );
};


export default AddSliderContent;