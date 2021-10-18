import { Dimensions, StyleSheet } from 'react-native';
import { Colors, fonts } from '../../styles';

export default StyleSheet.create({
    blur: {
        flex: 1,
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    alertContainer: {
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 9998,
    },
    alertBox: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 230,
        width: Dimensions.get('window').width * 0.85,
        backgroundColor: Colors.white,
        borderRadius: 10,
        zIndex: 9999,
    },
    textBox: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsBox: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 0.5,
        borderColor: Colors.grey,
    },
    buttonsText: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: 20,
    },
    hidden: {
        display: 'none',
    },
});
