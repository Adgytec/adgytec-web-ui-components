import { clsx } from "clsx";
import { Header } from "react-aria-components";
import { MenuSectionHeaderStyles } from "@/components/Menu";
import { typography } from "@/utils";

/**
 * Header label rendered at the top of a {@link SelectListSection}.
 */
export const SelectListSectionHeader: React.FC<
    React.ComponentPropsWithRef<"header">
> = ({ className, ...props }) => {
    return (
        <Header
            className={clsx(
                typography.labelLarge,
                MenuSectionHeaderStyles,
                className
            )}
            {...props}
        />
    );
};
