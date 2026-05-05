import { clsx } from "clsx";
import {
    ListBoxSection,
    type ListBoxSectionProps,
} from "react-aria-components";
import { MenuSectionStyles } from "@/components/Menu";

export const SelectListSection = <T extends object>({
    className,
    ...props
}: ListBoxSectionProps<T>) => {
    return (
        <ListBoxSection
            className={clsx(MenuSectionStyles, className)}
            {...props}
        />
    );
};
