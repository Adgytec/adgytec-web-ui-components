import { FilledButton } from "@/components/Button/FilledButton";
import styles from "./select.module.css";
import type { ButtonVariantProps } from "@/components/Button/ButtonBase/types.ts";
import type { SelectProps } from "./types";
import {
  Select as UnstyledSelect,
  ListBox,
  ListBoxItem,
  SelectValue,
  Text,
} from "react-aria-components";
import { Popover } from "@/components/Popover/PopoverBase";
import { ChevronsUpDown, Check } from "lucide-react";
import type { ComponentType } from "react";
import { OutlinedButton } from "@/components/Button/OutlinedButton";
import { TextButton } from "@/components/Button/TextButton";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Label } from "@/components/Form/Label/Label.tsx";
import { FieldError } from "@/components/Form/FieldError/FieldError.tsx";
import { BaseCard } from "../Card/BaseCard";

export const Select = ({
  options,
  cardBackground = "gradient",
  triggerTheme = "inverse-surface",
  label,
  name,
  disabled,
  isRequired,
  triggerVariant = "filled",
  description,
  placeholder,
  selectedKey,
  onSelectionChange,
}: SelectProps) => {
  let TriggerVariant: ComponentType<ButtonVariantProps>;
  switch (triggerVariant) {
    case "filled":
      TriggerVariant = FilledButton;
      break;
    case "outlined":
      TriggerVariant = OutlinedButton;
      break;
    case "text":
      TriggerVariant = TextButton;
      break;
    default:
      TriggerVariant = FilledButton;
  }

  return (
    <UnstyledSelect
      className={styles["select"]}
      isDisabled={disabled}
      isRequired={isRequired}
      name={name}
      value={selectedKey}
      onChange={onSelectionChange}
    >
      {label && <Label>{label}</Label>}

      <Tooltip description={description} theme={triggerTheme}>
        <TriggerVariant theme={triggerTheme}>
          <span className={styles["trigger"]}>
            {placeholder ? (
              <SelectValue className={`${styles["selected-value"]}`}>
                {({ defaultChildren, isPlaceholder }) => {
                  return isPlaceholder ? placeholder : defaultChildren;
                }}
              </SelectValue>
            ) : (
              <SelectValue />
            )}
            <ChevronsUpDown />
          </span>
        </TriggerVariant>
      </Tooltip>

      <FieldError />

      <Popover>
        <BaseCard background={cardBackground}>
          <ListBox className={`${styles["options-list"]}`} items={options}>
            {(option) => {
              const ItemComp = (
                <>
                  <Text>{option.displayValue}</Text>
                  {option.description && (
                    <Text className={styles["option-description"]}>
                      {option.description}
                    </Text>
                  )}
                </>
              );

              return (
                <ListBoxItem
                  className={`${styles["options-item-group"]}`}
                  key={option.key}
                  id={option.key}
                  textValue={option.displayValue}
                  isDisabled={option.disabled}
                >
                  {({ isSelected }) => (
                    <>
                      <div className={`${styles["options-item"]}`}>
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
