import { Button } from "./Button";
import { ButtonVariant, type ButtonVariantProps } from "./types";

export const FilledButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant={ButtonVariant.filled}>
      {children}
    </Button>
  );
};
