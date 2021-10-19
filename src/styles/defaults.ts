// Package imports
import { StyleSheet } from 'react-native';

// Style imports
import { Colors } from '@styles/variables';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.lightGrey,
        flex: 1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        borderRadius: 64 / 2,
        backgroundColor: Colors.yellow,
    },
    buttonPos: {
        position: 'absolute',
        right: 32,
        bottom: 40,
    },
    buttonIcon: {
        width: 32,
        height: 32,
    },
    addIcon: {
        transform: [{ rotate: '45deg' }],
    },
});
