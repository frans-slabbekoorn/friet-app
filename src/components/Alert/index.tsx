// Package imports
import React, { FC, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { v4 as uuid } from 'uuid';

// Style imports
import { Colors } from '@styles/variables';
import styles from './styles';

// Type imports
import { AlertOption } from '@custom-types/Alert';

interface Props {
    show: boolean;
    title: string;
    values: AlertOption[];
    onClose?: () => void;
}

/**
 * Alert component
 *
 * Alert covering entire screen
 * @param { Props }
 * @returns { JSX.Element }
 */
const Alert: FC<Props> = ({ show, title, values, onClose }): JSX.Element => {
    return (
        <>
            <BlurView
                blurType="light"
                blurAmount={10}
                style={[styles.blur, { zIndex: show ? 9998 : -1 }]}
                reducedTransparencyFallbackColor={Colors.white}
            />
            <TouchableOpacity
                onPress={onClose}
                style={show ? styles.alertContainer : styles.hidden}>
                <TouchableOpacity style={styles.alertBox} activeOpacity={1}>
                    <View style={styles.textBox}>
                        <Text>{title}</Text>
                    </View>
                    <View style={styles.buttonsBox}>
                        {values.map((value, i, arr) => (
                            <TouchableOpacity
                                key={uuid()}
                                style={[
                                    styles.buttonItem,
                                    i > 0 && styles.buttonLeftBorder,
                                    i !== arr.length - 1 &&
                                        arr.length !== 1 &&
                                        styles.buttonRightBorder,
                                ]}
                                onPress={value.onPress}>
                                <Text style={styles.buttonsText}>{value.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </>
    );
};

export default Alert;
