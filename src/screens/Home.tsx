// Package imports
import React, { FC, useContext, useEffect } from 'react';
import { Platform, KeyboardAvoidingView, StatusBar, TouchableOpacity, Image } from 'react-native';

// Component imports
import Header from '@components/Header';
import CardList from '@components/CardList';
import Alert from '@components/Alert';

// Context imports
import { AlertContext } from '@contexts/AlertContext';

// Hook imports
import { useSlider } from '@hooks/useSlider';

// Function imports
import image from '@functions/image';

// Style imports
import styles from '@styles/defaults';
import { Colors } from '@styles/variables';

// Type imports
import { AlertProps } from '@custom-types/Alert';

const Home: FC = (): JSX.Element => {
    const { setSliderType } = useSlider();
    const { show, title, values } = useContext(AlertContext) as AlertProps;

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
