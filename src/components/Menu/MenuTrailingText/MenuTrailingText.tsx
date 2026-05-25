import clsx from "clsx";
import { typography } from "@/utils/typography";

export const MenuTrailingText: React.FC<React.ComponentPropsWithRef<"p">> = ({
    className,
    ...props
}) => {
    return <p className={clsx(typography.labelLarge, className)} {...props} />;
};
