import Button from "./Button";
import { ButtonVariant, type ButtonVariantProps } from "./types";

const OutlinedButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant={ButtonVariant.outlined}>
      {children}
    </Button>
  );
};

export default OutlinedButton;
