import { TextButton } from "../Button/TextButton";
import { BaseCard } from "../Card/BaseCard";
import type { ToastProps } from "./types";
import { toast as sonnerToast } from "sonner";
import { X } from "lucide-react";
import styles from "./toast.module.css";
import { clsx } from "clsx";

export function toast(details: ToastProps) {
    return sonnerToast.custom(
        (id) => {
            return <Toast id={id} {...details} />;
        },
        {
            toasterId: details.toasterID,
            dismissible: details.dismissable,
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
    closeButton = true,
}) => {
    return (
        <BaseCard background={background} className={clsx(styles["toast"])}>
            {prefixIcon && (
                <div className={clsx(styles["prefix"])}>{prefixIcon}</div>
            )}

            <div className={clsx(styles["content"])}>
                <h3 className={clsx(styles["heading"])}>{heading}</h3>

                {description && (
                    <p className={clsx(styles["description"])}>{description}</p>
                )}
            </div>

            {closeButton && (
                <div>
                    <TextButton
                        theme="inverse-surface"
                        onPress={() => sonnerToast.dismiss(id)}
                        shape="square-shrink"
                    >
                        <X />
                    </TextButton>
                </div>
            )}
        </BaseCard>
    );
};
