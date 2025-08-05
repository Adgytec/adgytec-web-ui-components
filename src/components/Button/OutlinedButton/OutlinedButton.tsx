import { ButtonVariant, type ButtonVariantProps } from "../ButtonBase";
import { Button } from "../ButtonBase/Button";

export const OutlinedButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant={ButtonVariant.outlined}>
      {children}
    </Button>
  );
};
