import clsx from "clsx";
import {
    DateInput as AriaDateInput,
    composeRenderProps,
} from "react-aria-components";
import styles from "./dateInput.module.css";

/**
 * Segmented date input container based on React Aria's `DateInput`.
 * Coordinates rendering of editable date and time segments within a field.
 */
export const DateInput: React.FC<
    React.ComponentPropsWithRef<typeof AriaDateInput>
> = (props) => {
    return (
        <AriaDateInput
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["input"], className)
            )}
        />
    );
};
