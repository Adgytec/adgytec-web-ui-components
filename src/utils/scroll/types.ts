export type CalculateScrollTopResult = {
    progress: number;
    targetScrollTop: number;
};

// for targetScrollTop calculation scrollTop is used as progress
// for progress calculation scrollTop is acutal scrollTop of the element
export type CalculateScrollTopInput = {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
};

export type CalculateScrollTop = (
    params: CalculateScrollTopInput
) => CalculateScrollTopResult;
