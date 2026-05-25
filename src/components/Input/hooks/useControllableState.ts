import { useState } from "react";

export function useControllableState({
    value,
    defaultValue,
    onChange,
}: {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}) {
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
