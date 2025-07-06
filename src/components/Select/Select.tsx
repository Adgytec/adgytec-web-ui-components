import FilledButton from "../Button/FilledButton";
import {
  ButtonTheme,
  ButtonVariant,
  type ButtonVariantProps,
} from "../Button/types";
import type { SelectProps } from "./types";
import {
  Select as UnstyledSelect,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
} from "react-aria-components";
import { ChevronsUpDown } from "lucide-react";
import type { ComponentType } from "react";
import OutlinedButton from "../Button/OutlinedButton";
import TextButton from "../Button/TextButton";
("lucide-react");

const Select = ({
  options,
  label,
  name,
  disabled,
  triggerTheme,
  triggerVariant,
  placeholder,
}: SelectProps) => {
  let Trigger: ComponentType<ButtonVariantProps>;
  switch (triggerVariant) {
    case ButtonVariant.filled:
      Trigger = FilledButton;
      break;
    case ButtonVariant.outlined:
      Trigger = OutlinedButton;
      break;
    case ButtonVariant.text:
      Trigger = TextButton;
      break;
  }

  return (
    <UnstyledSelect isDisabled={disabled}>
      <Trigger theme={triggerTheme}>
        {placeholder ? (
          <SelectValue>
            {({ defaultChildren, isPlaceholder }) => {
              return isPlaceholder ? placeholder : defaultChildren;
            }}
          </SelectValue>
        ) : (
          <SelectValue />
        )}
        <ChevronsUpDown size={16} strokeWidth={3} />
      </Trigger>
    </UnstyledSelect>
  );
};

export default Select;
