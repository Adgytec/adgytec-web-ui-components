import {
  ButtonVariant,
  type ButtonVariantProps,
} from "@/components/Button/ButtonBase";
import { Button } from "@/components/Button/ButtonBase/Button";

export const TextButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant={ButtonVariant.text}>
      {children}
    </Button>
  );
};
