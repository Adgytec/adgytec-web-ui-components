import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils/typography";

export const Description: React.FC<
    React.ComponentPropsWithRef<typeof Text>
> = ({ className, slot: _, ...props }) => {
    return (
        <Text
            slot="description"
            className={clsx(typography.labelMedium, className)}
            {...props}
        />
    );
};
