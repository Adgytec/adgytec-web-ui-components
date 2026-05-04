import { Select as AriaSelect } from "react-aria-components";
import { Description } from "../../Description";
import { FieldError } from "../../FieldError";
import { Label } from "../../Label";
import type { SelectProps } from "./types";

export const Select = <
    T extends object,
    M extends "single" | "multiple" = "single",
>({
    label,
    description,
    errorMessage,
    children,
    className,
    ...props
}: SelectProps<T, M>) => {
    return (
        <AriaSelect {...props}>
            {(renderProps) => (
                <>
                    {label && <Label>{label}</Label>}

                    {typeof children === "function"
                        ? children(renderProps)
                        : children}

                    {description && <Description>{description}</Description>}

                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </AriaSelect>
    );
};
