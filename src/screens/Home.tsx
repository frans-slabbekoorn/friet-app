// Package imports
import React, { FC, useContext } from 'react';
import { Platform, KeyboardAvoidingView, StatusBar, TouchableOpacity, Image } from 'react-native';

// Component imports
import Header from '@components/Header';
import CardList from '@components/CardList';
import Alert from '@components/Alert';
import FloatingButton from '@components/FloatingButton';

// Context imports
import { SliderContext } from '@contexts/SliderContext';
import { AlertContext } from '@contexts/AlertContext';

// Function imports
import image from '@functions/image';

// Style imports
import styles from '@styles/defaults';
import { Colors } from '@styles/variables';

// Type imports
import { AlertContextProps } from '@custom-types/Alert';
import { SliderContextProps } from '@custom-types/Slider';

/**
 * Home screen
 *
 * @returns { JSX.Element }
 */
const Home: FC = (): JSX.Element => {
    const { setSliderType } = useContext(SliderContext) as SliderContextProps;
    const { show, title, values } = useContext(AlertContext) as AlertContextProps;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Header />
            <Alert show={show} title={title} values={values} />
            <CardList />
            <FloatingButton type="search" bottom={132} source={image.miscellaneous.search} />
            <FloatingButton
                childrenStyle={{ transform: [{ rotate: '45deg' }] }}
                source={image.miscellaneous.close}
                bottom={40}
                onPress={() => setSliderType('add')}
            />
            <StatusBar backgroundColor={Colors.yellow} barStyle="dark-content" />
        </KeyboardAvoidingView>
    );
};

export default Home;
