import FilledButton from "../Button/FilledButton";
import styles from "./select.module.css";
import { ButtonVariant, type ButtonVariantProps } from "../Button/types";
import type { SelectProps } from "./types";
import {
  Select as UnstyledSelect,
  ListBox,
  ListBoxItem,
  SelectValue,
  Text,
} from "react-aria-components";
import Popover from "../Popover/Popover.tsx";
import { ChevronsUpDown, Check } from "lucide-react";
import type { ComponentType } from "react";
import OutlinedButton from "../Button/OutlinedButton";
import TextButton from "../Button/TextButton";
import { ColorTheme } from "../../utils/types";
import Tooltip from "../Tooltip/Tooltip";
import Label from "../Form/Label/Label.tsx";
import FieldError from "../Form/FieldError/FieldError.tsx";

const Select = ({
  options,
  label,
  name,
  disabled,
  isRequired,
  triggerVariant = ButtonVariant.filled,
  description,
  placeholder,
  selectedKey,
  onSelectionChange,
}: SelectProps) => {
  let TriggerVariant: ComponentType<ButtonVariantProps>;
  switch (triggerVariant) {
    case ButtonVariant.filled:
      TriggerVariant = FilledButton;
      break;
    case ButtonVariant.outlined:
      TriggerVariant = OutlinedButton;
      break;
    case ButtonVariant.text:
      TriggerVariant = TextButton;
      break;
  }

  return (
    <UnstyledSelect
      className={styles["select"]}
      isDisabled={disabled}
      isRequired={isRequired}
      name={name}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
    >
      {label && <Label>{label}</Label>}

      <Tooltip description={description} theme={ColorTheme.inverseSurface}>
        <TriggerVariant theme={ColorTheme.inverseSurface}>
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
            <ChevronsUpDown size={16} strokeWidth={3} />
          </span>
        </TriggerVariant>
      </Tooltip>

      <FieldError />

      <Popover>
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
                    {isSelected && <Check strokeWidth={3} />}
                  </>
                )}
              </ListBoxItem>
            );
          }}
        </ListBox>
      </Popover>
    </UnstyledSelect>
  );
};

export default Select;
