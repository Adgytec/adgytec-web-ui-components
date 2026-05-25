import clsx from "clsx";
import { Heading } from "react-aria-components";
import { typography } from "@/utils";

export const RichTooltipSubhead: React.FC<
    React.ComponentPropsWithRef<typeof Heading>
> = ({ className, ...props }) => {
    return (
        <Heading
            className={clsx(typography.titleSmall, className)}
            {...props}
        />
    );
};
