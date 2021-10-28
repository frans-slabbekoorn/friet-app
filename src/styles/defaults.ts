// Package imports
import { StyleSheet } from 'react-native';

// Style imports
import { Colors } from '@styles/variables';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.lightGrey,
        flex: 1,
    },
    blur: {
        flex: 1,
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    transparent: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        borderRadius: 64 / 2,
        backgroundColor: Colors.yellow,
    },
    buttonIcon: {
        width: 32,
        height: 32,
    },
});
