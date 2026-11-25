import { clsx } from "clsx";
import {
    ColorSwatchPickerItem as AriaColorSwatchPickerItem,
    composeRenderProps,
} from "react-aria-components";
import styles from "./colorSwatchPickerItem.module.css";
import type { ColorSwatchPickerItemProps } from "./types";

export const ColorSwatchPickerItem: React.FC<ColorSwatchPickerItemProps> = (
    props
) => {
    return (
        <AriaColorSwatchPickerItem
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["item"], className)
            )}
        />
    );
};
