import React, { FC, useEffect, useState } from 'react';
import { Platform, KeyboardAvoidingView, StatusBar } from 'react-native';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Slider from '../components/Slider';
import styles, { Colors } from '../styles';
import { TranslateContext } from '../functions/TranslateContext';
import { getLanguage } from '../translations';

const Home: FC = () => {
    const [sliderType, setSliderType] = useState<
        'view' | 'edit' | 'add' | null
    >();
    const [itemId, setItemId] = useState<string>();
    const [language, setLanguage] = useState<any>();

    useEffect(() => {
        fetchLanguage();
    }, []);

    const fetchLanguage = async () => {
        setLanguage(await getLanguage());
    };

    return (
        <TranslateContext.Provider value={language}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <Header />
                <CardList
                    onPress={(type, id: string) => {
                        setSliderType(type);
                        setItemId(id);
                    }}
                />
                <Slider
                    id={itemId}
                    type={sliderType}
                    onClose={() => {
                        setItemId('');
                        setSliderType(null);
                    }}
                />
                <StatusBar
                    backgroundColor={Colors.yellow}
                    barStyle="dark-content"
                />
            </KeyboardAvoidingView>
        </TranslateContext.Provider>
    );
};

export default Home;
