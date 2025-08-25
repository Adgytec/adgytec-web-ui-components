import {
  BaseCard,
  CardBackground,
  CardPadding,
  type StyledBaseCardProps,
} from "../BaseCard";

export const GradientCard: React.FC<StyledBaseCardProps> = ({
  padding = CardPadding.default,
  ...props
}) => {
  return (
    <BaseCard
      {...props}
      padding={padding}
      background={CardBackground.gradient}
    />
  );
};
