import {
  ButtonVariant,
  type ButtonVariantProps,
} from "@/components/Button/ButtonBase";
import { Button } from "@/components/Button/ButtonBase/Button";

export const OutlinedButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant={ButtonVariant.outlined}>
      {children}
    </Button>
  );
};
