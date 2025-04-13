import { useCallback } from "react";

const useSmoothScrollTop = () => {
    const smoothScrollTo = useCallback((element, duration = 600) => {
        if (!element) return;

        const targetY = element.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const distance = targetY - startY;
        let startTime = null;

        const easeInOutQuad = (t) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const scroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = easeInOutQuad(Math.min(elapsed / duration, 1));

            window.scrollTo(0, startY + distance * progress);
            if (elapsed < duration) requestAnimationFrame(scroll);
        };

        requestAnimationFrame(scroll);
    }, []);

    return smoothScrollTo;
};

export default useSmoothScrollTop;