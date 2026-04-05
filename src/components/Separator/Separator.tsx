// TODO: extends react aria separator comp
// handle horizontal and vertical both

import { clsx } from "clsx";
import { Separator as AriaSeparator } from "react-aria-components";
import styles from "./separator.module.css";

export const Separator = () => {
    return <AriaSeparator className={clsx(styles["separator"])} />;
};
