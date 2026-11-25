import clsx from "clsx";
import {
    ColorSwatchPicker as AriaColorSwatchPicker,
    composeRenderProps,
} from "react-aria-components";
import { ColorSwatchConfigContext } from "../core";
import styles from "./colorSwatchPicker.module.css";
import type { ColorSwatchPickerProps } from "./types";

export const ColorSwatchPicker: React.FC<ColorSwatchPickerProps> = ({
    shape = "round",
    size = "small",
    ...props
}) => {
    return (
        <ColorSwatchConfigContext value={{ shape, size }}>
            <AriaColorSwatchPicker
                {...props}
                className={composeRenderProps(props.className, (className) =>
                    clsx(styles["picker"], className)
                )}
            />
        </ColorSwatchConfigContext>
    );
};
