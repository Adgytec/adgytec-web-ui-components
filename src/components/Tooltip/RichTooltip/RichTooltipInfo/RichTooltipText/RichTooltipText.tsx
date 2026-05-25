import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";

export const RichTooltipText: React.FC<
    React.ComponentPropsWithRef<typeof Text>
> = ({ className, ...props }) => {
    return (
        <Text className={clsx(typography.bodyMedium, className)} {...props} />
    );
};
