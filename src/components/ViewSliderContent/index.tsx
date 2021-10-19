// Package imports
import React, { FC, useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { v4 as uuid } from 'uuid';

// Component imports
import ReviewStars from '@components/ReviewStars';

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
import Tags from '@components/Tags';

interface Props {
    id?: string;
}

/**
 * ViewSliderContent component
 *
 * @param { Props }
 * @returns { JSX.Element }
 */
const ViewSliderContent: FC<Props> = ({ id }): JSX.Element => {
    const { language } = useTranslate();
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
    }, [id]);

    const getItem = async (): Promise<void> => {
        if (typeof id !== 'string') return;
        setItem(await db.getItem(id));
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

export default ViewSliderContent;
