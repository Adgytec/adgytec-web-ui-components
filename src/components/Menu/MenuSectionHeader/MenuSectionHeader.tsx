import clsx from "clsx";
import { Header } from "react-aria-components";
import { typography } from "@/utils/typography";

export const MenuSectionHeader: React.FC<
    React.ComponentPropsWithoutRef<"header">
> = ({ className, ...props }) => {
    return (
        <Header className={clsx(typography.labelLarge, className)} {...props} />
    );
};
