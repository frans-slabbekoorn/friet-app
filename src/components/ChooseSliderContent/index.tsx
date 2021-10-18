import React, { FC, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { v4 as uuid } from 'uuid';
import styles from './styles';

interface ChooseValue {
    title: string;
    onPress: () => void;
    warning?: boolean;
}

interface Props {
    values: ChooseValue[];
}

const ChooseSliderContent: FC<Props> = ({ values }): JSX.Element => {
    return (
        <View style={styles.chooseSliderContainer}>
            {values.map((value: ChooseValue) => (
                <TouchableOpacity key={uuid()} onPress={value.onPress} style={styles.item}>
                    <Text style={[ styles.itemText, value.warning && styles.warning]}>
                        {value.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default ChooseSliderContent;
