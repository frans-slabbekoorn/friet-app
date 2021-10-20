// Package imports
import React, { FC, useContext, useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { v4 as uuid } from 'uuid';

// Component imports
import ReviewStars from '@components/ReviewStars';
import Tags from '@components/Tags';

// Context imports
import { SliderContext } from '@contexts/SliderContext';

// Hook imports
import { useTranslate } from '@hooks/useTranslate';

// Function imports
import image from '@functions/image';

// Style imports
import styles from './styles';

// Type imports
import { Item } from '@custom-types/Item';

// Custom imports
import Database from '@config/database';

/**
 * ViewContent component
 *
 * @returns { JSX.Element }
 */
const ViewContent: FC = (): JSX.Element => {
    const { language } = useTranslate();
    const { currentId } = useContext(SliderContext);
    const [item, setItem] = useState<Item>({
        id: '',
        name: '',
        location: '',
        stars: 0,
        image_url: '',
        negatives: [],
        positives: [],
    });
    const db = new Database();

    useEffect(() => {
        getItem();
    }, [currentId]);

    const getItem = async (): Promise<void> => {
        if (typeof currentId !== 'string') return;
        setItem(await db.getItem(currentId));
    };

    return (
        <View style={styles.viewSliderContainer}>
            <TouchableOpacity activeOpacity={0.6} style={styles.imageContainer}>
                <Image
                    source={item.image_url ? { uri: item.image_url } : image.icons.defaultIcon}
                    style={styles.image}
                />
            </TouchableOpacity>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
            <View style={styles.starContainer}>
                <ReviewStars stars={item.stars} starStyle={styles.star} />
            </View>
            <Tags title={language.positives} editable={false} defaultValue={item.positives} />
            <Tags title={language.negatives} editable={false} defaultValue={item.negatives} />
        </View>
    );
};

export default ViewContent;
