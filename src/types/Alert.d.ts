import React from 'react';

export interface AlertOption {
    title: string;
    onPress: () => null;
}

export interface AlertProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    values: AlertOption[];
    setValues: React.Dispatch<React.SetStateAction<AlertOption[]>>;
    onClose: () => null;
    setOnClose: React.Dispatch<React.SetStateAction<() => null>>;
}
