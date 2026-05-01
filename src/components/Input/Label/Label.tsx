import clsx from "clsx";
import { Label as AriaLabel, type LabelProps } from "react-aria-components";
import { typography } from "@/utils/typography";

export const Label: React.FC<LabelProps> = ({ className, ...props }) => {
    return (
        <AriaLabel
            className={clsx(typography.labelLarge, className)}
            {...props}
        />
    );
};
