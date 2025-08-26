import type React from "react";
import {
  BaseCard,
  CardBackground,
  type StyledSolidCardProps,
} from "../BaseCard";

export const SolidCard: React.FC<StyledSolidCardProps> = ({
  background = CardBackground.solid,
  ...props
}) => {
  return <BaseCard {...props} background={background} />;
};
