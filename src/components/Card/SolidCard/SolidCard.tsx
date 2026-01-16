import type React from "react";
import { BaseCard, type StyledSolidCardProps } from "../BaseCard";

export const SolidCard: React.FC<StyledSolidCardProps> = ({
  background = "solid",
  ...props
}) => {
  return <BaseCard {...props} background={background} />;
};
