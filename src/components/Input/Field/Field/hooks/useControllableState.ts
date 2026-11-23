import { useState } from "react";

/**
 * Options for the {@link useControllableState} hook.
 */
export interface UseControllableStateProps {
    /** Controlled value from props. */
    value?: string;
    /** Uncontrolled default value fallback. */
    defaultValue?: string;
    /** Change callback invoked when value updates. */
    onChange?: (value: string) => void;
}

/**
 * Custom hook to manage state that can operate in either controlled or uncontrolled mode.
 *
 * If `value` is passed, the hook operates in controlled mode; otherwise, it manages internal state.
 *
 * @param options - Controlled state options including `value`, `defaultValue`, and `onChange`.
 * @returns An object containing `currentValue` and `setValue`.
 */
export function useControllableState({
    value,
    defaultValue,
    onChange,
}: UseControllableStateProps) {
    const isControlled = value !== undefined;

    const [internalValue, setInternalValue] = useState(
        () => defaultValue ?? ""
    );

    const currentValue = isControlled ? value : internalValue;

    const setValue = (val: string) => {
        onChange?.(val);

        if (!isControlled) {
            setInternalValue(val);
        }
    };

    return {
        currentValue,
        setValue,
    };
}
