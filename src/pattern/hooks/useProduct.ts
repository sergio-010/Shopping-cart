import { useState } from 'react';

export const useProduct = () => {
    const [counter, setCounter] = useState(0);

    const incrementBy = (value: number) => {
        setCounter(counter + value);
    }

    if (counter < 0) {
        setCounter(0);
    }

    return {
        incrementBy,
        counter
    };
};
