import clsx from "clsx";
import { Header } from "react-aria-components";
import { typography } from "@/utils";
import { MenuSectionHeaderStyles } from "../core";

export const MenuSectionHeader: React.FC<
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
