// Package imports
import { StyleSheet } from 'react-native';

// Style imports
import { Colors } from '@styles/variables';

export default StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        borderRadius: 72 / 2,
        backgroundColor: Colors.yellow,
    },
    buttonPos: {
        position: 'absolute',
        right: 32,
    },
    buttonIcon: {
        width: 32,
        height: 32,
    },
    addIcon: {
        transform: [{ rotate: '45deg' }],
    },
    searchView: {
        height: '100%',
        position: 'absolute',
        backgroundColor: Colors.white,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        paddingLeft: 32,
        right: 0,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
    },
    searchInput: {
        height: '100%',
    },
    floatingButtonBackground: {
        width: '100%',
        height: '100%',
        borderRadius: 72 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.yellow,
    },
});
