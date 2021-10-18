import React, { FC, useContext } from 'react';
import { Platform, KeyboardAvoidingView, StatusBar, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import CardList from '../components/CardList';
import styles, { Colors } from '../styles';
import { TranslateContext } from '../functions/TranslateContext';
import { getLanguage } from '../translations';
import { useSlider } from '../hooks/useSlider';
import { AlertContext } from '../contexts/AlertContext';
import { AlertProps } from '../types/Alert';
import image from '../functions/image';
import Alert from '../components/Alert';

const Home: FC = () => {
    const { setSliderType } = useSlider();
    const {show, title, values, onClose} = useContext(AlertContext) as AlertProps;

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Header />
            <CardList />
            <TouchableOpacity style={{ ...styles.button, ...styles.buttonPos }} onPress={() => setSliderType('add')}><Image source={image.miscellaneous.close} style={{...styles.buttonIcon, ...styles.addIcon }} /></TouchableOpacity>
            {/* <Alert
            show={show} title={title} values={values} onClose={onClose}
            /> */}
            <StatusBar backgroundColor={Colors.yellow} barStyle="dark-content" />
        </KeyboardAvoidingView>
    );
};

export default Home;
