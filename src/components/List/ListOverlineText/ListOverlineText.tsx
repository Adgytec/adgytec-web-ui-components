import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./listOverlineText.module.css";

export const ListOverlineText: React.FC<
    React.ComponentPropsWithRef<typeof Text>
> = ({ className, ...props }) => {
    return (
        <Text
            className={clsx(
                styles["overline"],
                typography.labelSmall,
                className
            )}
            {...props}
        />
    );
};
