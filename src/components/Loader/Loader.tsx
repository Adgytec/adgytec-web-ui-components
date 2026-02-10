import { LoaderCircle } from "lucide-react";
import styles from "./loader.module.css";
import { clsx } from "clsx";

export const Loader = () => {
    return <LoaderCircle className={clsx(styles["loader"])} />;
};
