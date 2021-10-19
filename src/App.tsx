// Package imports
import 'react-native-get-random-values';
import React, { FC, useEffect, useState } from 'react';

// Component imports
import Home from '@screens/Home';

// Context imports
import { AlertContext } from '@contexts/AlertContext';
import { SliderProvider } from '@contexts/SliderContext';
import { TranslateProvider } from '@contexts/TranslateContext';
import { ItemContext } from '@contexts/ItemContext';

// Type imports
import { AlertOption } from '@custom-types/Alert';
import { Items } from '@custom-types/Item';

// Custom imports
import Database from '@config/database';

/**
 * App component
 *
 * @returns { JSX.Element }
 */
const App: FC = (): JSX.Element => {
    const [show, setShow] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [values, setValues] = useState<AlertOption[]>([]);
    const [items, setItems] = useState<Items>([]);

    return (
        <TranslateProvider>
            <AlertContext.Provider
                value={{
                    show,
                    setShow,
                    title,
                    setTitle,
                    values,
                    setValues,
                }}>
                <ItemContext.Provider value={{ items, setItems }}>
                    <SliderProvider>
                        <Home />
                    </SliderProvider>
                </ItemContext.Provider>
            </AlertContext.Provider>
        </TranslateProvider>
    );
};

export default App;
