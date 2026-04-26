import clsx from "clsx";
import { typography } from "@/utils/typography";

export const MenuSectionLabel: React.FC<
    React.ComponentPropsWithoutRef<"p">
> = ({ className, ...props }) => {
    return <p className={clsx(typography.labelLarge, className)} {...props} />;
};
