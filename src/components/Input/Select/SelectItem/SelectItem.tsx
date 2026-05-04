import { ListBoxItem } from "react-aria-components";
import type { SelectItemProps } from "./types";

export const SelectItem: React.FC<SelectItemProps> = ({ label, ...props }) => {
    return <ListBoxItem {...props}>{label}</ListBoxItem>;
};
