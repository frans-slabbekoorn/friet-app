// Package imports
import { Dispatch, SetStateAction } from 'react';

export interface AlertOption {
    title: string;
    onPress: () => void;
}

export interface AlertContextProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    values: AlertOption[];
    setValues: Dispatch<SetStateAction<AlertOption[]>>;
}
