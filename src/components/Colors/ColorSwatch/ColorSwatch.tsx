import clsx from "clsx";
import {
    ColorSwatch as AriaColorSwatch,
    composeRenderProps,
} from "react-aria-components";
import styles from "./colorSwatch.module.css";
import type { ColorSwatchProps } from "./types";

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
    size = "small",
    shape = "round",
    ...props
}) => {
    return (
        <AriaColorSwatch
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["swatch"], styles[shape], styles[size], className)
            )}
            data-shape={shape}
            data-size={size}
        />
    );
};
