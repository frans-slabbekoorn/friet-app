import { BlurView } from '@react-native-community/blur';
import React, { FC, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../styles';
import { AlertOption } from '../../types/Alert';
import { v4 as uuid } from 'uuid';
import styles from './styles';

interface Props {
    show: boolean;
    title: string;
    values: AlertOption[];
    onClose: () => null;
}

const Alert: FC<Props> = ({ show, title, values, onClose }): JSX.Element => {
    const [alertShow, setAlertShow] = useState<boolean>(false);

    useEffect(() => {
        setAlertShow(show);
    }, [show]);

    return (
        <>
            <BlurView
                blurType="light"
                blurAmount={10}
                style={[styles.blur, { zIndex: alertShow ? 9998 : -1 }]}
                reducedTransparencyFallbackColor={Colors.white}
            />
            <TouchableOpacity
                onPress={() => {
                    setAlertShow(false);
                    onClose();
                }}
                style={alertShow ? styles.alertContainer : styles.hidden}>
                <TouchableOpacity style={styles.alertBox} activeOpacity={1}>
                    <View style={styles.textBox}>
                        <Text>{title}</Text>
                    </View>
                    <View style={styles.buttonsBox}>
                        {values.map((value, i, arr) => (
                            <TouchableOpacity
                                key={uuid()}
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    ...(i !== arr.length - 1 &&
                                        arr.length !== 1 && {
                                            borderRightWidth: 0.25,
                                            borderRightColor: Colors.grey,
                                        }),
                                    ...(i > 0 && {
                                        borderLeftWidth: 0.25,
                                        borderRightColor: Colors.grey,
                                    }),
                                }}
                                onPress={value.onPress}>
                                <Text>{value.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </>
    );
};

export default Alert;
