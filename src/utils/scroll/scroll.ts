export function getScrollProgress({
    scrollHeight,
    scrollTop,
    clientHeight,
}: {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
}): number {
    const maxScrollTop = scrollHeight - clientHeight;
    return maxScrollTop <= 0 ? 0 : scrollTop / maxScrollTop;
}
export function getScrollTopFromProgress({
    scrollHeight,
    progress,
    clientHeight,
}: {
    progress: number;
    scrollHeight: number;
    clientHeight: number;
}): number {
    const maxScrollTop = scrollHeight - clientHeight;
    return progress * maxScrollTop;
}
