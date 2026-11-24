import {
    Select as AriaSelect,
    composeRenderProps,
} from "react-aria-components";
import { FieldGroup } from "@/components/Input/Field/Field/FieldGroup/FieldGroup";
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
    ...props
}: SelectProps<T, M>) => {
    return (
        <AriaSelect {...props}>
            {composeRenderProps(
                props.children,
                (children, { isDisabled, isInvalid }) => {
                    return (
                        <FieldGroup
                            label={label}
                            description={description}
                            errorMessage={errorMessage}
                            hasTrailing={true}
                            isInvalid={isInvalid}
                            isDisabled={isDisabled}
                        >
                            {children}
                        </FieldGroup>
                    );
                }
            )}
        </AriaSelect>
    );
};
