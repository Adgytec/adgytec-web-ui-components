import { clsx } from "clsx";
import { ListBoxSection } from "react-aria-components";
import { MenuSectionStyles } from "@/components/Menu";

/**
 * A group section separating categorized items within a {@link SelectList}.
 */
export const SelectListSection = <T extends object>({
    className,
    ...props
}: React.ComponentPropsWithRef<typeof ListBoxSection<T>>) => {
    return (
        <ListBoxSection
            className={clsx(MenuSectionStyles, className)}
            {...props}
        />
    );
};
