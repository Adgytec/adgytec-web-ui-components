import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./listSupportingText.module.css";

export const ListSupportingText: React.FC<
    Omit<React.ComponentPropsWithRef<typeof Text>, "slot">
> = ({ className, ...props }) => {
    return (
        <Text
            className={clsx(
                styles["supporting"],
                typography.bodyMedium,
                className
            )}
            slot="description"
            {...props}
        />
    );
};
