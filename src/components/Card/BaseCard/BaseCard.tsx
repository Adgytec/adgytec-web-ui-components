import type React from "react";
import type { BaseCardProps } from "./types";
import styles from "./base-card.module.css";

export const BaseCard: React.FC<BaseCardProps> = ({
  background = "solid",
  componentStyle = "normal",
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className ?? ""} ${styles[componentStyle]} ${styles["card"]}  ${styles[background]}`}
      data-card="true"
    >
      {children}
    </div>
  );
};
