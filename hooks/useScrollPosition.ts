'use client';

import * as React from 'react';

export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = React.useState(0);

    React.useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY);
        };

        updatePosition();
        window.addEventListener('scroll', updatePosition);

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
}