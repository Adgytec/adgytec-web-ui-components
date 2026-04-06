// TODO: better api
// will reimport list box components with custom styles for select

import { clsx } from "clsx";
import { Check, ChevronsUpDown } from "lucide-react";
import {
    ListBox,
    ListBoxItem,
    SelectValue,
    Text,
    Select as UnstyledSelect,
} from "react-aria-components";
import { FieldError } from "@/components/Form/FieldError/FieldError.tsx";
import { Label } from "@/components/Form/Label/Label.tsx";
import { Popover } from "@/components/Popover/PopoverBase";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "../Button";
import { BaseCard } from "../Card/BaseCard";
import styles from "./select.module.css";
import type { SelectProps } from "./types";

export const Select = ({
    options,
    cardBackground = "gradient",
    triggerTheme = "inverse-surface",
    label,
    ariaLabel,
    name,
    disabled,
    isRequired,
    triggerVariant = "filled",
    description,
    placeholder,
    selectedKey,
    onSelectionChange,
}: SelectProps) => {
    return (
        <UnstyledSelect
            isDisabled={disabled}
            isRequired={isRequired}
            name={name}
            value={selectedKey}
            onChange={onSelectionChange}
            aria-label={ariaLabel}
        >
            {label && <Label className={clsx(styles["label"])}>{label}</Label>}

            <Tooltip description={description} theme={triggerTheme}>
                <Button variant={triggerVariant} theme={triggerTheme}>
                    <span className={clsx(styles["trigger"])}>
                        {placeholder ? (
                            <SelectValue
                                className={clsx(styles["selected-value"])}
                            >
                                {({ defaultChildren, isPlaceholder }) => {
                                    return isPlaceholder
                                        ? placeholder
                                        : defaultChildren;
                                }}
                            </SelectValue>
                        ) : (
                            <SelectValue />
                        )}
                        <ChevronsUpDown />
                    </span>
                </Button>
            </Tooltip>

            <FieldError />

            <Popover className={clsx(styles["popover"])}>
                <BaseCard background={cardBackground}>
                    <ListBox
                        className={clsx(styles["options-list"])}
                        items={options}
                    >
                        {(option) => {
                            const ItemComp = (
                                <>
                                    <Text>{option.displayValue}</Text>
                                    {option.description && (
                                        <Text
                                            className={clsx(
                                                styles["option-description"]
                                            )}
                                        >
                                            {option.description}
                                        </Text>
                                    )}
                                </>
                            );

                            return (
                                <ListBoxItem
                                    className={clsx(
                                        styles["options-item-group"]
                                    )}
                                    key={option.key}
                                    id={option.key}
                                    textValue={option.displayValue}
                                    isDisabled={option.disabled}
                                >
                                    {({ isSelected }) => (
                                        <>
                                            <div
                                                className={clsx(
                                                    styles["options-item"]
                                                )}
                                            >
                                                {ItemComp}
                                            </div>
                                            {isSelected && <Check />}
                                        </>
                                    )}
                                </ListBoxItem>
                            );
                        }}
                    </ListBox>
                </BaseCard>
            </Popover>
        </UnstyledSelect>
    );
};
