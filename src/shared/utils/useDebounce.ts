import { useCallback, useState } from 'react';

export function useDebounce(callback: any, delay: any) {
    const [timer, setTimer] = useState<any>(null);

    const debouncedCallback = useCallback((...args: any) => {
        if (timer) {
            clearTimeout(timer);
        }
        setTimer(setTimeout(() => {
            callback(...args);
        }, delay));
    }, [callback, delay, timer]);

    return debouncedCallback;
}