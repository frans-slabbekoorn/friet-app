// Package imports
import React, { FC, useEffect, useState } from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { v4 as uuid } from 'uuid';

// Function imports
import images from '@functions/image';

// Style imports
import styles from './styles';

interface Props {
    stars: number;
    starStyle: object;
}

/**
 * ReviewStars React Native Functional Component
 *
 * Called in each card
 * @param { object } props
 */
const ReviewStars: FC<Props> = ({ stars, starStyle }) => {
    const [renderStars, setRenderStars] = useState<JSX.Element[]>([]);

    useEffect(() => {
        setRenderStars([]);
        getStars();
    }, [stars]);

    /**
     * Star Function
     *
     * Returns JSX Component based on type
     * @param { string } type
     * @returns { JSX.Element }
     */
    const star = (type: string): JSX.Element => {
        const imageTypes: string[] = Object.keys(images.miscellaneous.star);
        const imageIndex: number = imageTypes.findIndex(
            (image): boolean => image === type,
        );
        const source: ImageSourcePropType[] = Object.values(
            images.miscellaneous.star,
        );

        return (
            <Image
                key={uuid()}
                source={source[imageIndex]}
                style={starStyle}
            />
        );
    };

    /**
     * GetStars Function
     *
     * Sets state for renderstars depending on total stars
     */
    const getStars = (): void => {
        let starsArrayLength: number = 0;
        while (starsArrayLength <= 4) {
            if (stars > 1) {
                setRenderStars((oldRenderStars: JSX.Element[]) => [
                    ...oldRenderStars,
                    star('full'),
                ]);
                stars -= 2;
            } else if (stars === 1) {
                setRenderStars((oldRenderStars: JSX.Element[]) => [
                    ...oldRenderStars,
                    star('half'),
                ]);
                stars -= 1;
            } else {
                setRenderStars((oldRenderStars: JSX.Element[]) => [
                    ...oldRenderStars,
                    star('empty'),
                ]);
            }

            starsArrayLength++;
        }
    };

    return (
        <View style={styles.starsWrapper}>
            {renderStars.map((renderStar: JSX.Element) => renderStar)}
        </View>
    );
};

export default ReviewStars;
