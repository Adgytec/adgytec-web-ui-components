import {
  BaseCard,
  CardBackground,
  type StyledBaseCardProps,
} from "../BaseCard";

export const GradientCard: React.FC<StyledBaseCardProps> = (props) => {
  return <BaseCard {...props} background={CardBackground.gradient} />;
};
