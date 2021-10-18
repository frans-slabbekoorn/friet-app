import React, { FC, useState } from 'react';
import { AlertContext } from "./src/contexts/AlertContext";
import { SliderProvider } from "./src/contexts/SliderContext";
import { TranslateProvider } from "./src/contexts/TranslateContext";
import Home from './src/screens/Home';
import { AlertOption } from "./src/types/alert";

const App: FC = () => {
    const [show,setShow] = useState<boolean>(false);
    const [title,setTitle] = useState<string>('');
    const [values,setValues] = useState<AlertOption[]>([]);
    const [onClose, setOnClose] = useState<() => null>(() => null);

    return (
        <TranslateProvider>
            <SliderProvider>
                <AlertContext.Provider value={{ show,setShow,title,setTitle,values,setValues,onClose,setOnClose }}>
                    <Home />
                </AlertContext.Provider>
            </SliderProvider>
        </TranslateProvider>
    );
};

export default App;
