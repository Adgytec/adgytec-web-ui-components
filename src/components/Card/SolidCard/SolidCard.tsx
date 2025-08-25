import type React from "react";
import {
  BaseCard,
  CardBackground,
  CardPadding,
  type StyledBaseCardProps,
} from "../BaseCard";

export const SolidCard: React.FC<StyledBaseCardProps> = ({
  padding = CardPadding.default,
  ...props
}) => {
  return (
    <BaseCard {...props} padding={padding} background={CardBackground.solid} />
  );
};
