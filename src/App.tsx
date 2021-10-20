// Package imports
import 'react-native-get-random-values';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { Modalize } from 'react-native-modalize';

// Component imports
import Home from '@screens/Home';
import SliderContent from '@components/Sliders';

// Context imports
import { AlertContext } from '@contexts/AlertContext';
import { SliderContext } from '@contexts/SliderContext';
import { TranslateProvider } from '@contexts/TranslateContext';
import { ItemContext } from '@contexts/ItemContext';

// Style imports
import styles from '@styles/defaults';
import { Colors } from '@styles/variables';

// Type imports
import { AlertOption } from '@custom-types/Alert';
import { InsertItem, Items } from '@custom-types/Item';
import { SliderType } from '@custom-types/Slider';

/**
 * App component
 *
 * @returns { JSX.Element }
 */
const App: FC = (): JSX.Element => {
    const ref = useRef<Modalize>(null);
    const lockedSliders: SliderType[] = ['chooseImage'];
    const [show, setShow] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [values, setValues] = useState<AlertOption[]>([]);
    const [sliderType, setSliderType] = useState<SliderType>('null');
    const [isLocked, setIsLocked] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState<string>('');
    const [items, setItems] = useState<Items>([]);
    const [itemFormData, setItemFormData] = useState<InsertItem>({
        name: '',
        location: '',
        stars: 6,
        image_url: null,
        positives: [],
        negatives: [],
    });

    useEffect(() => {
        setIsLocked(lockedSliders.includes(sliderType));
        const isNull = sliderType === 'null';
        ref.current?.[isNull ? 'close' : 'open']();
        isNull && setCurrentId('');
    }, [sliderType]);

    return (
        <TranslateProvider>
            <AlertContext.Provider
                value={{
                    show,
                    setShow,
                    title,
                    setTitle,
                    values,
                    setValues,
                }}>
                <ItemContext.Provider value={{ items, setItems, itemFormData, setItemFormData }}>
                    <SliderContext.Provider
                        value={{
                            setSliderType,
                            currentId,
                            setCurrentId,
                        }}>
                        <Home />
                        <BlurView
                            blurType="light"
                            blurAmount={10}
                            style={[styles.blur, { zIndex: sliderType !== 'null' ? 1 : -1 }]}
                            reducedTransparencyFallbackColor={Colors.white}
                        />
                        <Modalize
                            keyboardAvoidingBehavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                            adjustToContentHeight
                            overlayStyle={styles.transparent}
                            ref={ref}
                            panGestureEnabled={!isLocked}
                            closeOnOverlayTap={!isLocked}
                            onClosed={() => setSliderType('null')}>
                            <SliderContent type={sliderType} />
                        </Modalize>
                    </SliderContext.Provider>
                </ItemContext.Provider>
            </AlertContext.Provider>
        </TranslateProvider>
    );
};

export default App;
