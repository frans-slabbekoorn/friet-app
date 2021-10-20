// Package imports
import React, { useContext, useState } from 'react';

// Context imports
import { SliderContext } from '@contexts/SliderContext';

// Hook imports
import { useDidMountEffect } from '@hooks/useDidMountEffect';

// Type imports
import { SliderContextProps, SliderType } from '@custom-types/Slider';
import { InsertItem } from '@custom-types/Item';

// Custom imports
import sliderComponents from '@components/Sliders';

/**
 * useSlider hook
 */
const useSlider = () => {
    const { setSliderContent, currentId, setCurrentId, type, setType, setIsLocked, ref } =
        useContext(SliderContext) as SliderContextProps;
    const [sliderType, setSliderType] = useState<SliderType | undefined>(undefined);

    useDidMountEffect(() => {
        if (sliderType) setType(sliderType);
    }, [sliderType]);

    useDidMountEffect(() => {
        if (sliderType) setSliderType(type);
    }, [type, currentId]);

    useDidMountEffect(() => {
        updateSliderContent(sliderType);
    }, [sliderType]);

    const updateSliderContent = (type?: SliderType) => {
        const lockedComponents: SliderType[] = ['chooseImage'];
        setIsLocked(false);
        if (lockedComponents.includes(type || sliderType || 'null')) {
            setIsLocked(true);
        }

        if (type === 'null') {
            setSliderContent(null);
            setCurrentId('');
            return closeSlider();
        }

        ref.current?.open();
        if (!(type || sliderType) || (type || sliderType) === 'null') return setSliderContent(null);
        const Component = sliderComponents[type || sliderType || 'null'] as any;
        setSliderContent(
            <Component
                setSliderType={setSliderType}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />,
        );
    };

    const closeSlider = (): void => ref.current?.close();

    return { currentId, setCurrentId, closeSlider, setSliderType };
};

export { useSlider };
