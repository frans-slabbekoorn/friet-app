import React, { FC, useEffect, useRef, useState } from 'react';
import { Platform, Dimensions, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';
import ViewSliderContent from '../ViewSliderContent';
import { BlurView } from '@react-native-community/blur';
import { Colors } from '../../styles';
import style from './style';

interface Props {
    id?: string;
    type: string | null | undefined;
    onClose: () => void;
}

const Slider: FC<Props> = ({ id, type, onClose }) => {
    const ref = useRef<Modalize>(null);
    const [height, setHeight] = useState<number>(0);
    const [content, setContent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        getContent(type);
    }, [type, id]);

    const getContent = (type: string | null | undefined): void => {
        switch (type) {
            case 'view':
                setContent(<ViewSliderContent id={id} />);
                setHeight(Dimensions.get('window').height * 0.8);
                ref.current?.open();
                break;
            case 'edit':
                setHeight(Dimensions.get('window').height * 0.2);
                ref.current?.open();
                break;
            default:
                setContent(null);
                setHeight(Dimensions.get('window').height * 0);
                break;
        }
    };

    return (
        <>
            <BlurView
                blurType="light"
                blurAmount={10}
                style={{ ...style.blur, zIndex: content ? 1 : -1 }}
                reducedTransparencyFallbackColor={Colors.white}
            />
            <Modalize
                keyboardAvoidingBehavior={
                    Platform.OS == 'ios' ? 'padding' : 'height'
                }
                modalHeight={height}
                overlayStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
                ref={ref}
                onClose={onClose}>
                {content}
            </Modalize>
        </>
    );
};

export default Slider;
