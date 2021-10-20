// Package imports
import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { v4 as uuid } from 'uuid';

// Style imports
import styles from './styles';

interface ChooseValue {
    title: string;
    onPress: () => void;
    warning?: boolean;
}

interface Props {
    values: ChooseValue[];
}

/**
 * ChooseSliderContent component
 *
 * @param { Props }
 * @returns { JSX.Element }
 */
const ChooseSliderContent: FC<Props> = ({ values }): JSX.Element => {
    return (
        <View style={styles.chooseSliderContainer}>
            {values.map((value: ChooseValue) => (
                <TouchableOpacity key={uuid()} onPress={value.onPress} style={styles.item}>
                    <Text style={[styles.itemText, value.warning && styles.warning]}>
                        {value.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default ChooseSliderContent;
