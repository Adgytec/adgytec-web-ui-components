import { LoaderCircle } from "lucide-react";
import styles from "./loader.module.css";

export const Loader = () => {
  return <LoaderCircle className={styles["loader"]} />;
};
