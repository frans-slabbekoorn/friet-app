import React, { FC, useEffect, useState } from 'react';
import "react-native-get-random-values";
import { Image, Text, View } from 'react-native';
import Database from '../../database';
import styles from './style';
import ReviewStars from '../ReviewStars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslateContext } from '../../functions/TranslateContext';
import { v4 } from 'uuid';

interface Props {
    id?: string;
}

interface Item {
    name?: string;
    location?: string | null;
    image_url?: string | null;
    stars?: number;
}

const ViewSliderContent: FC<Props> = ({ id }) => {
    const language = useTranslateContext();
    const [item, setItem] = useState<Item>();
    const [tags, setTags] = useState<string[][]>([[], []]);
    const db = new Database();

    useEffect(() => {
        getItem();
    }, [id]);

    const getItem = async (): Promise<void> => {
        if (typeof id !== 'string') return;

        const itemData = await db.getItem(id);
        setItem(itemData[0]);

        itemData.shift();
        setTags(itemData);
    };

    return (
        <View style={styles.viewSliderContainer}>
            <TouchableOpacity activeOpacity={0.6} style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/icons/default-icon.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <Text style={styles.itemName}>{item?.name}</Text>
            <Text style={styles.itemLocation}>{item?.location}</Text>
            <View style={styles.starContainer}>
                <ReviewStars stars={item?.stars || 0} starStyle={styles.star} />
            </View>
            <View style={styles.tagsContainer}>
                <Text style={styles.tagsTitle}>{language.positives}</Text>
                <View style={styles.tagsContent}>
                    {tags[0].map((tag: string): JSX.Element => (
                        <View key={v4()} style={styles.tag}>
                            <Text style={styles.tagName}>{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.tagsContainer}>
                <Text style={styles.tagsTitle}>{language.negatives}</Text>
                <View style={styles.tagsContent}>
                    {tags[1].map((tag: string): JSX.Element => (
                        <View key={v4()} style={styles.tag}>
                            <Text style={styles.tagName}>{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default ViewSliderContent;
