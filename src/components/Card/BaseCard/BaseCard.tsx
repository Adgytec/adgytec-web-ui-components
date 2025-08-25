import type React from "react";
import { CardBackground, CardPadding, type BaseCardProps } from "./types";
import styles from "./base-card.module.css";

export const BaseCard: React.FC<BaseCardProps> = ({
  padding = CardPadding.none,
  background = CardBackground.transparent,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className} ${styles[padding]} ${styles[background]}`}
      data-card="true"
    >
      {children}
    </div>
  );
};
