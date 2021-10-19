// Package imports
import React, { FC } from 'react';
import { View, Image } from 'react-native';

// Function imports
import image from '@functions/image';

// Style imports
import styles from './styles';

/**
 * Header component
 *
 * @returns { JSX.Element }
 */
const Header: FC = (): JSX.Element => {
    return (
        <>
            <View style={styles.headerBackground} />
            <Image
                style={styles.headerGradient}
                resizeMode="stretch"
                source={image.miscellaneous.gradient}
            />
            <View style={styles.headerImageContainer}>
                <Image style={styles.headerImage} source={image.miscellaneous.logo} />
            </View>
        </>
    );
};

export default Header;
