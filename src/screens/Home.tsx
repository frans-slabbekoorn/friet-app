// Package imports
import React, { FC, useContext } from 'react';
import { Platform, KeyboardAvoidingView, StatusBar, TouchableOpacity, Image } from 'react-native';

// Component imports
import Header from '@components/Header';
import CardList from '@components/CardList';
import Alert from '@components/Alert';

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
            <TouchableOpacity
                style={[styles.button, styles.buttonPos]}
                onPress={() => setSliderType('add')}>
                <Image
                    source={image.miscellaneous.close}
                    style={[styles.buttonIcon, styles.addIcon]}
                />
            </TouchableOpacity>
            <StatusBar backgroundColor={Colors.yellow} barStyle="dark-content" />
        </KeyboardAvoidingView>
    );
};

export default Home;
