import type React from "react";
import { CardBackground, type BaseCardProps } from "./types";
import styles from "./base-card.module.css";
import { ComponentStyle } from "@/utils/types";

export const BaseCard: React.FC<BaseCardProps> = ({
  background = CardBackground.solid,
  componentStyle = ComponentStyle.normal,
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
