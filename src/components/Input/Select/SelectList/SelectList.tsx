import { ListBox, type ListBoxProps } from "react-aria-components";

export const SelectList = <T extends object>(props: ListBoxProps<T>) => {
    return <ListBox {...props} />;
};
