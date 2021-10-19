// Package imports
import { Dimensions, StyleSheet } from 'react-native';

// Style imports
import { Colors, fonts } from '@styles/variables';

export default StyleSheet.create({
    tagsContainer: {
        alignItems: 'center',
        marginBottom: 25,
    },
    tagsTitle: {
        width: Dimensions.get('window').width * 0.8,
        fontSize: 10,
        fontFamily: fonts.poppins.semiBold,
    },
    tagsContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Dimensions.get('window').width * 0.8 + 10,
    },
    tag: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 5,
        paddingLeft: 10,
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 20,
    },
    hidden: {
        display: 'none',
    },
    tagNameHidden: {
        paddingRight: 15,
    },
    tagName: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        paddingTop: 13 / 4,
        fontFamily: fonts.poppins.regular,
        fontSize: 13,
        color: Colors.black,
    },
    closeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        width: 23,
        height: 23,
        borderRadius: 20,
        backgroundColor: Colors.grey,
    },
    closeImage: {
        width: 18,
        height: 18,
    },
});
