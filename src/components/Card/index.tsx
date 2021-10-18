import React, { FC } from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text,
    Image,
    ImageSourcePropType,
} from 'react-native';
import styles from './style';
import { Colors } from '../../styles';
import ReviewStars from '../ReviewStars';
import { useSlider } from '../../hooks/useSlider';

interface Props {
    id: string;
    name: string;
    imageSource: ImageSourcePropType | null;
    location: string | null;
    stars: number;
    firstItem: boolean;
}

const defaultImage: ImageSourcePropType = require('../../assets/images/miscellaneous/default-image.png');

/**
 * Card React Native Functional Component
 *
 * @param { object } props
 */
const Card: FC<Props> = ({ id, name, imageSource, location, stars, firstItem }) => {
    const { setSliderType, setCurrentId } = useSlider();

    const handlePress = () => {
        setSliderType('view');
        setCurrentId(id);
    };
    
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[styles.cardContainer, firstItem ? styles.spaceCardContainer : {}]}
            onPress={handlePress}>
            <View style={styles.card}>
                <View style={styles.cardImageContainer}>
                    <Image source={imageSource || defaultImage} style={styles.cardImage} />
                </View>
                <View style={styles.cardContentWrapper}>
                    <View>
                        <Text numberOfLines={1} style={styles.cardContentHeaderText}>
                            {name}
                        </Text>
                        <Text numberOfLines={2} style={styles.cardContentText}>
                            {location}
                        </Text>
                    </View>
                    <ReviewStars stars={stars} starStyle={styles.star} />
                </View>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(Colors.lightGrey, true)}>
                    <View style={styles.cardOptions}>
                        <View style={styles.optionsContainer}>
                            <View style={styles.optionDot} />
                            <View style={styles.optionDot} />
                            <View style={styles.optionDot} />
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
