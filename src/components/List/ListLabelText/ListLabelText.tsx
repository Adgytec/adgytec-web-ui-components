import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./listLabelText.module.css";

export const ListLabelText: React.FC<
    Omit<React.ComponentPropsWithRef<typeof Text>, "slot">
> = ({ className, ...props }) => {
    return (
        <Text
            className={clsx(styles["label"], typography.bodyLarge, className)}
            slot="label"
            {...props}
        />
    );
};
