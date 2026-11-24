import clsx from "clsx";
import {
    DateSegment as AriaDateSegment,
    composeRenderProps,
} from "react-aria-components";
import { FieldEditorColorStyles, FieldTypography } from "../../core";
import styles from "./dateSegment.module.css";

/**
 * An editable date or time segment (e.g. month, day, year, hour, minute) based on React Aria's `DateSegment`.
 * Handles focus styling, placeholder display, and typography styling.
 */
export const DateSegment: React.FC<
    React.ComponentPropsWithRef<typeof AriaDateSegment>
> = (props) => {
    return (
        <AriaDateSegment
            {...props}
            className={composeRenderProps(
                props.className,
                (className, { isPlaceholder }) =>
                    clsx(
                        styles["segment"],
                        FieldTypography,
                        !isPlaceholder && FieldEditorColorStyles,
                        className
                    )
            )}
        />
    );
};
