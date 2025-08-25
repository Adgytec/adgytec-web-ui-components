import type React from "react";
import {
  BaseCard,
  CardBackground,
  type StyledBaseCardProps,
} from "../BaseCard";

export const TransparentCard: React.FC<StyledBaseCardProps> = (props) => {
  return <BaseCard {...props} background={CardBackground.transparent} />;
};
