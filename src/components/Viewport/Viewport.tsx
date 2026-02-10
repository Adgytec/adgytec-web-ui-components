import { useEffect } from "react";

export const Viewport = () => {
    useEffect(() => {
        // removes classic scroll bar problem
        const observer = new ResizeObserver(() => {
            let vw = document.documentElement.clientWidth / 100;
            document.documentElement.style.setProperty("--vw", `${vw}px`);
        });
        observer.observe(document.documentElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    return <></>;
};
