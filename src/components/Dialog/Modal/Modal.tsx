import clsx from "clsx";
import {
    Modal as AriaModal,
    type ModalOverlayProps,
} from "react-aria-components";
import styles from "./modal.module.css";

export const Modal: React.FC<ModalOverlayProps> = ({ className, ...props }) => {
    return (
        <AriaModal
            className={(renderProps) =>
                clsx(
                    styles["modal"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
