import {
  ButtonVariant,
  type ButtonVariantProps,
} from "@/components/Button/ButtonBase";
import { Button } from "@/components/Button/ButtonBase/Button";

export const FilledButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant={ButtonVariant.filled}>
      {children}
    </Button>
  );
};
