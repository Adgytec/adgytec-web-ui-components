import type { CalculateScrollTop } from "./types";

export const calculateScrollTop: CalculateScrollTop = ({
    scrollHeight,
    clientHeight,
    scrollTop,
}) => {
    const maxScrollTop = scrollHeight - clientHeight;
    const progress = maxScrollTop <= 0 ? 0 : scrollTop / maxScrollTop;
    const targetScrollTop = scrollTop * maxScrollTop;

    return { progress, targetScrollTop };
};
