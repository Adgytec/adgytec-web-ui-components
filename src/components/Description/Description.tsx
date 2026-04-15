import clsx from "clsx";
import { Text, type TextProps } from "react-aria-components";
import { typography } from "@/utils/typography";

export const Description: React.FC<TextProps> = ({
    className,
    slot: _,
    ...props
}) => {
    return (
        <Text
            slot="description"
            className={clsx(typography.labelMedium, className)}
            {...props}
        />
    );
};
