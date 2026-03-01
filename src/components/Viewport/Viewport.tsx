import { useEffect } from "react";

export const Viewport = () => {
    useEffect(() => {
        const updateVw = () => {
            const vw = document.documentElement.clientWidth / 100;
            document.documentElement.style.setProperty("--vw", `${vw}px`);
        };

        updateVw(); // Set the value on initial render

        // removes classic scroll bar problem
        const observer = new ResizeObserver(updateVw);
        observer.observe(document.documentElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    return <></>;
};
