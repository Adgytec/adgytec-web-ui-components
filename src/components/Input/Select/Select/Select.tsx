import clsx from "clsx";
import { Select as AriaSelect } from "react-aria-components";
import { Colors, InputGroupStyles, SupportingTextStyles } from "../../core";
import { Description } from "../../Description";
import { FieldError } from "../../FieldError";
import { Label } from "../../Label";
import type { SelectProps } from "./types";

/**
 * A dropdown selection component implementing Material Design 3 Select specifications.
 *
 * Allows users to choose one or more options from a collapsible listbox popover.
 * Manages accessible labels, helper descriptions, error messages, and keyboard navigation.
 *
 * @example
 * ```tsx
 * import {
 *     Select,
 *     SelectTrigger,
 *     SelectPopover,
 *     SelectList,
 *     SelectItem
 * } from '@adgytec/web-ui-components';
 *
 * <Select label="Country" placeholder="Choose a country">
 *     <SelectTrigger />
 *     <SelectPopover>
 *         <SelectList>
 *             <SelectItem id="us" label="United States" />
 *             <SelectItem id="ca" label="Canada" />
 *             <SelectItem id="uk" label="United Kingdom" />
 *         </SelectList>
 *     </SelectPopover>
 * </Select>
 * ```
 */
export const Select = <
    T extends object,
    M extends "single" | "multiple" = "single",
>({
    label,
    description,
    errorMessage,
    showDescriptionOnInvalid = false,
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
            {(renderProps) => {
                const { isInvalid } = renderProps;
                const showDescription =
                    description &&
                    (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        {typeof children === "function"
                            ? children(renderProps)
                            : children}

                        {showDescription && (
                            <Description className={clsx(SupportingTextStyles)}>
                                {description}
                            </Description>
                        )}

                        <FieldError className={clsx(SupportingTextStyles)}>
                            {errorMessage}
                        </FieldError>
                    </>
                );
            }}
        </AriaSelect>
    );
};
