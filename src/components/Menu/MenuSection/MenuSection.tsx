import {
    MenuSection as AriaMenuSection,
    type MenuSectionProps,
} from "react-aria-components";

export const MenuSection = <T extends object>({
    ...props
}: MenuSectionProps<T>) => {
    return <AriaMenuSection {...props} />;
};
