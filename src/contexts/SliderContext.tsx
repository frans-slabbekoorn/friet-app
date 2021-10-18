import React, { createContext, useState, useEffect, FC, useRef } from 'react';
import { Dimensions, Platform } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { BlurView } from '@react-native-community/blur';
import AddSliderContent from '../components/AddSliderContent';
import ViewSliderContent from '../components/ViewSliderContent';
import ChooseImageContent from '../components/ChooseImageContent';
import style from '../components/Slider/styles';
import { Colors } from '../styles';
import { SliderContent, SliderType } from '../types/Slider';
import { FormData } from '../types/Form';

interface Props {
    children: JSX.Element;
}

interface SliderContents {
    view: () => void;
    add: () => void;
    edit: () => void;
    chooseImage: () => void;
    null: () => void;
}

const SliderContext = createContext<SliderContent>({
    setSliderType: () => {},
    setCurrentId: () => {},
    updateFormState: () => {},
    closeSlider: () => {},
    formData: {
        name: '',
        location: '',
        stars: 0,
        image_url: null,
        positives: [],
        negatives: [],
    },
    previousType: 'null',
});

/**
 * SliderProvider
 *
 * @param { Object } Children screen
 * @returns { JSX.Element } SliderContext.Provider
 */
const SliderProvider: FC<Props> = ({ children }): JSX.Element => {
    const ref = useRef<Modalize>(null);
    const [type, setType] = useState<SliderType>('null');
    const [previousType, setPreviousType] = useState<SliderType>('null');
    const [currentId, setCurrentId] = useState<string>('');
    const [height, setHeight] = useState<number>(0);
    const [sliderContent, setSliderContent] = useState<JSX.Element | null>(null);
    const [isAlwaysOpen, setIsAlwaysOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        location: '',
        stars: 0,
        image_url: null,
        positives: [],
        negatives: [],
    });

    const setSliderContents: SliderContents = {
        view: () => {
            setSliderContent(<ViewSliderContent id={currentId} />);
            setHeight(Dimensions.get('window').height * 0.8);
            ref.current?.open();
        },
        add: () => {
            setSliderContent(<AddSliderContent />);
            setHeight(Dimensions.get('window').height * 0.8);
            ref.current?.open();
        },
        edit: () => {
            setSliderContent(<AddSliderContent />);
            setHeight(Dimensions.get('window').height * 0.8);
            ref.current?.open();
        },
        chooseImage: () => {
            setSliderContent(<ChooseImageContent />);
            setHeight(Dimensions.get('window').height * 0.45);
            ref.current?.open();
        },
        null: () => {
            setSliderContent(null);
            setHeight(0);
            closeSlider();
        },
    };

    const updateFormState = (mutatableObject: { [key: string]: unknown }): void =>
        setFormData({ ...formData, ...mutatableObject });

    const setSliderType = (newType: SliderType) => {
        setIsAlwaysOpen(false);
        setPreviousType(type);
        setType(newType);
    };

    const closeSlider = () => ref.current?.close();

    useEffect(() => {
        setSliderContents[type]();
    }, [type]);

    return (
        <SliderContext.Provider
            value={{
                setCurrentId,
                setSliderType,
                updateFormState,
                closeSlider,
                formData,
                previousType,
            }}>
            <>
                {children}
                <BlurView
                    blurType="light"
                    blurAmount={10}
                    style={[style.blur, { zIndex: sliderContent ? 1 : -1 }]}
                    reducedTransparencyFallbackColor={Colors.white}
                />
                <Modalize
                    keyboardAvoidingBehavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    modalHeight={height}
                    overlayStyle={{backgroundColor: "rgba(0,0,0,0)"}}
                    ref={ref}
                    alwaysOpen={isAlwaysOpen ? height : undefined}
                    onClosed={() => {
                        setSliderType('null');
                        setCurrentId('');
                    }}>
                    {sliderContent}
                </Modalize>
            </>
        </SliderContext.Provider>
    );
};

export { SliderProvider, SliderContext };
