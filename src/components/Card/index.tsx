// Package imports
import React, { FC } from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text, Image } from 'react-native';

// Component imports
import ReviewStars from '@components/ReviewStars';

// Hook imports
import { useSlider } from '@hooks/useSlider';

// Function imports
import image from '@functions/image';

// Style imports
import { Colors } from '@styles/variables';
import styles from './styles';

interface Props {
    id: string;
    name: string;
    image_url: string | null;
    location: string | null;
    stars: number;
    firstItem: boolean;
}

/**
 * Card React Native Functional Component
 *
 * @param { object } props
 * @returns { JSX.Element }
 */
const Card: FC<Props> = ({ id, name, image_url, location, stars, firstItem }): JSX.Element => {
    const { setSliderType, setCurrentId } = useSlider();

    const handlePress = () => {
        setSliderType('view');
        setCurrentId(id);
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[styles.cardContainer, firstItem && styles.spaceCardContainer]}
            onPress={handlePress}>
            <View style={styles.card}>
                <View style={styles.cardImageContainer}>
                    <Image
                        source={image_url ? { uri: image_url } : image.miscellaneous.defaultImage}
                        style={image_url ? styles.cardImage : styles.cardImageFallback}
                    />
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
