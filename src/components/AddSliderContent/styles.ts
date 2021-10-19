// Package imports
import { Dimensions, StyleSheet } from 'react-native';

// Style imports
import { Colors, fonts } from '@styles/variables';

export default StyleSheet.create({
    addSliderContainer: {
        height: Dimensions.get('window').height * 0.8,
        justifyContent: 'space-around',
    },
    starContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    star: {
        width: 35,
        height: 35,
        margin: 7,
    },
    starSlider: {
        width: 250,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    image: {
        width: 125,
        height: 125,
        borderRadius: 125 / 2,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
    },
    itemName: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: 22,
        width: '100%',
        textAlign: 'center',
    },
    itemLocation: {
        fontFamily: fonts.poppins.regular,
        fontSize: 10,
        width: '100%',
        textAlign: 'center',
    },
    buttonPos: {
        position: 'absolute',
        right: 15,
        bottom: 15,
    },
});
