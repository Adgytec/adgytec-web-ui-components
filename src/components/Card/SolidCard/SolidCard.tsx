import type React from "react";
import {
  BaseCard,
  CardBackground,
  CardPadding,
  type StyledSolidCardProps,
} from "../BaseCard";

export const SolidCard: React.FC<StyledSolidCardProps> = ({
  padding = CardPadding.default,
  background = CardBackground.solid,
  ...props
}) => {
  return <BaseCard {...props} padding={padding} background={background} />;
};
