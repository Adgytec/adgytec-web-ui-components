import { TextButton } from "../Button/TextButton";
import { BaseCard } from "../Card/BaseCard";
import type { ToastProps } from "./types";
import { toast as sonnerToast } from "sonner";
import { X } from "lucide-react";
import styles from "./toast.module.css";

export function toast(details: ToastProps) {
    return sonnerToast.custom(
        (id) => {
            return <Toast id={id} {...details} />;
        },
        {
            toasterId: details.toasterID,
            dismissible: details.manuallyDismissable,
            duration: details.duration,
        }
    );
}

const Toast: React.FC<ToastProps & { id: string | number }> = ({
    id,
    heading,
    background,
    prefixIcon,
    description,
}) => {
    return (
        <BaseCard background={background} className={styles["toast"]}>
            {prefixIcon && <div className={styles["prefix"]}>{prefixIcon}</div>}

            <div className={styles["content"]}>
                <h3 className={styles["heading"]}>{heading}</h3>

                {description && (
                    <p className={styles["description"]}>{description}</p>
                )}
            </div>

            <div>
                <TextButton
                    theme="inverse-surface"
                    onPress={() => sonnerToast.dismiss(id)}
                    shape="shrink"
                >
                    <X />
                </TextButton>
            </div>
        </BaseCard>
    );
};
