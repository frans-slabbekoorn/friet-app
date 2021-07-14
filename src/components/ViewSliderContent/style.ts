import { Dimensions, StyleSheet } from 'react-native';
import { Colors, fonts } from '../../styles/index';

export default StyleSheet.create({
    viewSliderContainer: {
        height: Dimensions.get('window').height * 0.8,
        display: 'flex',
        justifyContent: 'space-around',
    },
    starContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
    },
    star: {
        width: 35,
        height: 35,
        margin: 7,
    },
    imageContainer: {
        display: 'flex',
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
    starSlider: {
        width: 200,
    },
    tagsContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 25,
    },
    tagsTitle: {
        width: Dimensions.get('window').width * 0.8,
        fontSize: 8,
        fontFamily: fonts.poppins.regular,
    },
    tagsContent: {
        width: Dimensions.get('window').width * 0.8 + 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        alignSelf: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 20,
        margin: 5,
    },
    tagName: {
        fontSize: 9,
        fontFamily: fonts.poppins.regular,
    },
});
