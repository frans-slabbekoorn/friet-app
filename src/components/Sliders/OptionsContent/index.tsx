// Package imports
import React, { FC, useContext } from 'react';

// Component imports
import ChooseSliderContent from '@components/Sliders/ChooseContent';

// Context imports
import { SliderContext } from '@contexts/SliderContext';
import { AlertContext } from '@contexts/AlertContext';

// Hook imports
import { useTranslate } from '@hooks/useTranslate';
import { useItems } from '@hooks/useItems';

// Type imports
import { SliderContextProps } from '@custom-types/Slider';
import { AlertContextProps } from '@custom-types/Alert';

// Custom imports
import Database from '@config/database';

/**
 * OptionsContent component
 *
 * @returns { JSX.Element }
 */
const OptionsContent: FC = (): JSX.Element => {
    const { language } = useTranslate();
    const { refreshItems } = useItems();
    const { setShow, setTitle, setValues } = useContext(AlertContext) as AlertContextProps;
    const { currentId, setSliderType } = useContext(SliderContext) as SliderContextProps;
    const db = new Database();

    const handleDelete = async () => {
        await db.removeItem(currentId);
        refreshItems();
        setShow(false);
        setSliderType('null');
    };

    return (
        <ChooseSliderContent
            values={[
                {
                    title: language.edit,
                    onPress: () => {
                        setSliderType('edit');
                    },
                },
                {
                    title: language.delete,
                    warning: true,
                    onPress: () => {
                        setShow(true);
                        setSliderType('null');
                        setTitle(language.confirmDelete);
                        setValues([
                            { title: language.yes, onPress: handleDelete },
                            {
                                title: language.no,
                                onPress: () => {
                                    setSliderType('options');
                                    setShow(false);
                                },
                            },
                        ]);
                    },
                },
                {
                    title: language.cancel,
                    onPress: () => {
                        setSliderType('null');
                    },
                },
            ]}
        />
    );
};

export default OptionsContent;
