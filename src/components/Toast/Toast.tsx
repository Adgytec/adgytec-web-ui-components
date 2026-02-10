import type { ToastProps } from "./types";
import { toast as sonnerToast } from "sonner";

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

const Toast: React.FC<ToastProps & { id: string | number }> = ({}) => {
    return <div></div>;
};
