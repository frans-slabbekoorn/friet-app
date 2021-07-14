import { StyleSheet } from 'react-native';

interface Fonts {
    poppins: Poppins;
}

interface Poppins {
    regular: string;
    semiBold: string;
}

export enum Colors {
    white = '#FFFFFF',
    black = '#000000',
    lightGrey = '#EBEBEB',
    yellow = '#FFDB7B',
    red = '#D20000',
}

export const fonts: Fonts = {
    poppins: {
        regular: 'Poppins-Regular',
        semiBold: 'Poppins-SemiBold',
    },
};

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.lightGrey,
        flex: 1,
    },
});
