import clsx from "clsx";
import {
    ComboBox as AriaComboBox,
    ComboBoxValue,
    composeRenderProps,
    TagGroup,
    TagList,
} from "react-aria-components";
import { FieldAutoSizeStyles, FieldGroup } from "@/components/Input/Field";
import { Tag } from "@/components/Tag";
import { typography } from "@/utils";
import styles from "./comboBox.module.css";
import type { ComboBoxProps } from "./types";

/**
 * An autocomplete combobox component combining a text input field with a searchable options list popover.
 *
 * Implements Material Design 3 guidelines for auto-complete search inputs, supporting single or multi-selection,
 * removable selection tag chips, keyboard navigation, and custom filter matching.
 *
 * @example
 * ```tsx
 * import {
 *     ComboBox,
 *     ComboBoxTrigger,
 *     ComboBoxPopover,
 *     SelectList,
 *     SelectItem
 * } from '@adgytec/web-ui-components';
 *
 * <ComboBox label="Favorite Framework">
 *     <ComboBoxTrigger placeholder="Type to search..." />
 *     <ComboBoxPopover>
 *         <SelectList>
 *             <SelectItem id="react" label="React" />
 *             <SelectItem id="vue" label="Vue" />
 *             <SelectItem id="svelte" label="Svelte" />
 *         </SelectList>
 *     </ComboBoxPopover>
 * </ComboBox>
 * ```
 */
export const ComboBox = <
    T extends object,
    M extends "single" | "multiple" = "single",
>({
    label,
    description,
    errorMessage,
    hideMultiSelectionTags = false,
    ...props
}: ComboBoxProps<T, M>) => {
    return (
        <AriaComboBox
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(FieldAutoSizeStyles, className)
            )}
        >
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

                            {props.selectionMode === "multiple" &&
                                !hideMultiSelectionTags && (
                                    <ComboBoxValue<T>
                                        className={clsx(
                                            styles["selected-value"],
                                            typography.bodyLarge
                                        )}
                                    >
                                        {({ state }) => {
                                            return (
                                                <TagGroup
                                                    aria-label="Selected Items"
                                                    onRemove={(keys) => {
                                                        if (
                                                            Array.isArray(
                                                                state.value
                                                            )
                                                        ) {
                                                            state.setValue(
                                                                state.value.filter(
                                                                    (k) =>
                                                                        !keys.has(
                                                                            k
                                                                        )
                                                                )
                                                            );
                                                        }
                                                    }}
                                                >
                                                    <TagList
                                                        items={
                                                            state.selectedItems
                                                        }
                                                        className={clsx(
                                                            styles["tag-list"]
                                                        )}
                                                    >
                                                        {(item) => (
                                                            <Tag
                                                                id={item.key}
                                                                label={
                                                                    item.textValue
                                                                }
                                                            />
                                                        )}
                                                    </TagList>
                                                </TagGroup>
                                            );
                                        }}
                                    </ComboBoxValue>
                                )}
                        </FieldGroup>
                    );
                }
            )}
        </AriaComboBox>
    );
};
