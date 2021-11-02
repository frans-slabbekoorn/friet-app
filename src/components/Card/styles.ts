// Package imports
import { Dimensions, StyleSheet } from 'react-native';

// Style imports
import { Colors, fonts } from '@styles/variables';

export default StyleSheet.create({
    cardContainer: {
        height: 170,
        paddingHorizontal: 15,
        paddingVertical: 13,
    },
    spaceCardContainer: {
        marginTop: Dimensions.get('window').height / 5,
    },
    card: {
        height: '100%',
        flexDirection: 'row',
        borderRadius: 9,
        backgroundColor: Colors.white,
    },
    cardImageContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: Colors.lightGrey,
        borderRadius: 5,
    },
    cardImageFallback: {
        width: 80,
        height: 80,
    },
    cardImage: {
        width: '80%',
        height: '80%',
        borderRadius: 8,
    },
    cardContentWrapper: {
        flex: 6,
        overflow: 'hidden',
        justifyContent: 'space-evenly',
        paddingLeft: 15,
    },
    cardContentHeaderText: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: 23,
    },
    cardContentText: {
        fontFamily: fonts.poppins.regular,
        fontSize: 11,
    },
    star: {
        width: 27,
        height: 27,
        margin: 2,
    },
    cardOptions: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
    },
    optionDot: {
        width: 6,
        height: 6,
        backgroundColor: Colors.lightGrey,
        borderRadius: 50,
        margin: 1,
    },
});
