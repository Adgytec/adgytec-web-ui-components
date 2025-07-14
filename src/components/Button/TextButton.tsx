import { Button } from "./Button";
import { ButtonVariant, type ButtonVariantProps } from "./types";

export const TextButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant={ButtonVariant.text}>
      {children}
    </Button>
  );
};
