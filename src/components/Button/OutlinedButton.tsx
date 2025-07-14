import { Button } from "./Button";
import { ButtonVariant, type ButtonVariantProps } from "./types";

export const OutlinedButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant={ButtonVariant.outlined}>
      {children}
    </Button>
  );
};
