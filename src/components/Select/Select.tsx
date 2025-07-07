import FilledButton from "../Button/FilledButton";
import styles from "./select.module.css";
import { ButtonVariant, type ButtonVariantProps } from "../Button/types";
import type { SelectProps } from "./types";
import {
  Select as UnstyledSelect,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
  Text,
} from "react-aria-components";
import { ChevronsUpDown, Check } from "lucide-react";
import type { ComponentType } from "react";
import OutlinedButton from "../Button/OutlinedButton";
import TextButton from "../Button/TextButton";
import { ColorTheme } from "../../utils/types";
import Tooltip from "../Tooltip/Tooltip";

const Select = ({
  options,
  label,
  name,
  disabled,
  required,
  colorTheme = ColorTheme.primary,
  triggerVariant = ButtonVariant.filled,
  description,
  placeholder,
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

  let Trigger = (
    <TriggerVariant theme={colorTheme}>
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
    </TriggerVariant>
  );

  if (description) {
    Trigger = (
      <Tooltip description={description} theme={colorTheme}>
        {Trigger}
      </Tooltip>
    );
  }

  return (
    <UnstyledSelect isDisabled={disabled} isRequired={required} name={name}>
      {label && <Label>{label}</Label>}
      {Trigger}

      <Popover className={`${styles["options-popover"]} ${styles[colorTheme]}`}>
        <ListBox className={`${styles["options-list"]}`} items={options}>
          {options.map((option) => {
            const ItemComp = (
              <>
                <Text slot="label">{option.displayValue}</Text>
                {option.description && (
                  <Text slot="description">{option.description}</Text>
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
          })}
        </ListBox>
      </Popover>
    </UnstyledSelect>
  );
};

export default Select;
