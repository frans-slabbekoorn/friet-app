// Package imports
import { Dimensions, StyleSheet } from 'react-native';

// Style imports
import { Colors, fonts } from '@styles/variables';

export default StyleSheet.create({
    viewSliderContainer: {
        justifyContent: 'space-around',
        height: Dimensions.get('window').height * 0.8,
    },
    starContainer: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    star: {
        width: 35,
        height: 35,
        margin: 7,
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
        width: '100%',
        fontFamily: fonts.poppins.semiBold,
        fontSize: 22,
        textAlign: 'center',
    },
    itemLocation: {
        width: '100%',
        fontFamily: fonts.poppins.regular,
        fontSize: 10,
        textAlign: 'center',
    },
    starSlider: {
        width: 200,
    },
});
