import type { ReactNode } from "react";
import type { ButtonChildProps } from "./types";
import styles from "./buttonChild.module.css";
import { Loader } from "@/components/Loader/Loader";
import { Check, TriangleAlert } from "lucide-react";
import clsx from "clsx";

export const ButtonChild = ({ buttonState, value }: ButtonChildProps) => {
    const {
        enabled,
        disabled = enabled,
        pending = enabled,
        completed = enabled,
        error = "Try again",
    } = value;

    let child: ReactNode;
    switch (buttonState) {
        case "enabled":
            return enabled;

        case "disabled":
            return disabled;

        case "pending":
            child = (
                <>
                    <Loader /> {pending}
                </>
            );
            break;

        case "completed":
            child = (
                <>
                    <Check /> {completed}
                </>
            );
            break;

        case "error":
            child = (
                <>
                    <TriangleAlert /> {error}
                </>
            );
            break;
    }

    return <span className={clsx(styles["with-icon"])}>{child}</span>;
};
