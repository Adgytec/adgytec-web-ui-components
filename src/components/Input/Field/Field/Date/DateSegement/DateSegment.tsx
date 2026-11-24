import clsx from "clsx";
import {
    DateSegment as AriaDateSegment,
    composeRenderProps,
} from "react-aria-components";
import { FieldEditorColorStyles, FieldTypography } from "../../core";
import styles from "./dateSegment.module.css";

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
