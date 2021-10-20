// Package imports
import { useEffect, useRef } from 'react';

/**
 * useDidMountEffect hook
 *
 * useEffect which only gets called after initial mount
 * @param { Function } fn
 * @param { Array } dependencies
 */
const useDidMountEffect = (fn: () => void, dependencies: unknown[]) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) return fn();
        didMount.current = true;
    }, dependencies);
};

export { useDidMountEffect };
