import type React from "react";
import { CardBackground, type BaseCardProps } from "./types";
import styles from "./base-card.module.css";

export const BaseCard: React.FC<BaseCardProps> = ({
  background = CardBackground.solid,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className ?? ""} ${styles["card"]}  ${styles[background]}`}
      data-card="true"
    >
      {children}
    </div>
  );
};
