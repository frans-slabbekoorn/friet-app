// Package imports
import React, { FC, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    ImageSourcePropType,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

// Hook imports
import { useTranslate } from '@hooks/useTranslate';
import { useItems } from '@hooks/useItems';

// Type imports
import styles from './styles';

interface Props {
    type?: string;
    source: ImageSourcePropType;
    bottom: number;
    childrenStyle?: { [key: string]: unknown };
    onPress?: () => void;
}

/**
 * FloatingButton component
 *
 * @param { Props }
 * @returns { JSX.Element }
 */
const FloatingButton: FC<Props> = ({
    type,
    source,
    bottom,
    childrenStyle,
    onPress,
}): JSX.Element => {
    const slideAnim = useRef<Animated.Value>(new Animated.Value(0.2)).current;
    const input = useRef<TextInput>(null);
    const [filter, setFilter] = useState<string>('');
    const { language } = useTranslate();
    const { filterItems } = useItems();

    const handlePress = () => {
        if (onPress) onPress();
        input.current?.isFocused() ? handleCloseInput() : handleOpenInput();
    };

    const handleOpenInput = () => {
        Animated.timing(slideAnim, {
            useNativeDriver: false,
            toValue: 1,
            duration: 300,
        }).start();
        input.current?.focus();
    };

    const handleCloseInput = async () => {
        Animated.timing(slideAnim, {
            useNativeDriver: false,
            toValue: 0.2,
            duration: 300,
        }).start();
        filterItems(filter);
        input.current?.blur();
    };

    const interpolate = (outputRange: number[] | string[]): Animated.AnimatedInterpolation => {
        return slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange,
        });
    };

    return (
        <TouchableOpacity
            activeOpacity={type === 'search' ? 1 : 0.3}
            style={[styles.button, styles.buttonPos, { bottom }]}
            onPress={handlePress}>
            {type === 'search' && (
                <Animated.View
                    style={[
                        styles.searchView,
                        {
                            borderTopLeftRadius: interpolate([72 / 2, 12]),
                            borderBottomLeftRadius: interpolate([72 / 2, 12]),
                            width: interpolate([0, Dimensions.get('screen').width * 0.825]),
                        },
                    ]}>
                    <TextInput
                        ref={input}
                        style={styles.searchInput}
                        placeholder={language.search}
                        onChangeText={setFilter}
                        onEndEditing={handleCloseInput}
                    />
                </Animated.View>
            )}
            <View style={styles.floatingButtonBackground}>
                <Image source={source} style={[styles.buttonIcon, childrenStyle]} />
            </View>
        </TouchableOpacity>
    );
};

export default FloatingButton;
