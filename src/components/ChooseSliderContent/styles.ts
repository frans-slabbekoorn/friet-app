import { Dimensions, StyleSheet } from 'react-native';
import { Colors, fonts } from '../../styles';

export default StyleSheet.create({
    chooseSliderContainer: {
        height: Dimensions.get('window').height * 0.45,
        justifyContent: 'space-around',
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    itemText: {
        textAlign: 'center',
        fontFamily: fonts.poppins.semiBold,
        fontSize: 19,
    },
    warning: {
        color: Colors.red,
    },
});
