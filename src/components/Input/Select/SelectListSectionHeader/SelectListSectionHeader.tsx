import { clsx } from "clsx";
import { Header } from "react-aria-components";
import { MenuSectionHeaderStyles } from "@/components/Menu";
import { typography } from "@/utils";

export const SelectListSectionHeader: React.FC<
    React.ComponentPropsWithoutRef<"header">
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
