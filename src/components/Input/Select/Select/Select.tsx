import clsx from "clsx";
import { Select as AriaSelect } from "react-aria-components";
import { Colors, InputGroupStyles, SupportingTextStyles } from "../../core";
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
        <AriaSelect
            className={(renderProps) =>
                clsx(
                    Colors,
                    InputGroupStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {(renderProps) => (
                <>
                    {label && <Label>{label}</Label>}

                    {typeof children === "function"
                        ? children(renderProps)
                        : children}

                    {description && (
                        <Description className={clsx(SupportingTextStyles)}>
                            {description}
                        </Description>
                    )}

                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </AriaSelect>
    );
};
