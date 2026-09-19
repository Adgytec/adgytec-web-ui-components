import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./listTrailingText.module.css";

export const ListTrailingText: React.FC<
    React.ComponentPropsWithRef<typeof Text>
> = ({ className, ...props }) => {
    return (
        <Text
            className={clsx(
                styles["trailing"],
                typography.labelSmall,
                className
            )}
            {...props}
        />
    );
};
