import {
    ListBoxSection,
    type ListBoxSectionProps,
} from "react-aria-components";

export const SelectListSection = <T extends object>(
    props: ListBoxSectionProps<T>
) => {
    return <ListBoxSection {...props} />;
};
