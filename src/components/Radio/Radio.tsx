import { clsx } from "clsx";
import { Radio as AriaRadio, type RadioProps } from "react-aria-components";
import styles from "./radio.module.css";

export const Radio: React.FC<RadioProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <AriaRadio
            className={(renderProps) =>
                clsx(
                    styles["radio"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {(renderProps) => (
                <>
                    <div className={styles["indicator"]}>oo</div>
                    {children}
                </>
            )}
        </AriaRadio>
    );
};
