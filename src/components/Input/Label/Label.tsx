import clsx from "clsx";
import { Label as AriaLabel } from "react-aria-components";
import { typography } from "@/utils/typography";

export const Label: React.FC<React.ComponentPropsWithRef<typeof AriaLabel>> = ({
    className,
    ...props
}) => {
    return (
        <AriaLabel
            slot="label"
            className={clsx(typography.labelLarge, className)}
            {...props}
        />
    );
};
