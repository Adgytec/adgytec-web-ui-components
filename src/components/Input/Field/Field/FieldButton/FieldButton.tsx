import clsx from "clsx";
import { composeRenderProps } from "react-aria-components";
import { IconButton, type IconButtonProps } from "@/components/Button";
import styles from "./fieldButton.module.css";

/**
 * An icon button specifically styled for embedding as a leading or trailing action inside a Field.
 * Preconfigured with standard color, small size, and field styling tokens.
 */
export const FieldButton: React.FC<
    Omit<IconButtonProps, "color" | "size" | "width">
> = (props) => {
    return (
        <IconButton
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["button"], className)
            )}
            color="standard"
            size="small"
            width="default"
        />
    );
};
