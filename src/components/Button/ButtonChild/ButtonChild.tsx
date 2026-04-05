// TODO: button child will be changed to StateText component (can change name to better define its responsiblity)
// also button state will be changed to generic state as states are similar for other components too

import clsx from "clsx";
import { Check, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { Loader } from "@/components/Loader/Loader";
import styles from "./buttonChild.module.css";
import type { ButtonChildProps } from "./types";

export const ButtonChild = ({ buttonState, value }: ButtonChildProps) => {
    const {
        enabled,
        disabled = enabled,
        pending = enabled,
        completed = enabled,
        error = enabled,
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
