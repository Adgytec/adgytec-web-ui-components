import Button from "./Button";
import { ButtonVariant, type ButtonVariantProps } from "./types";

const FilledButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant={ButtonVariant.filled}>
      {children}
    </Button>
  );
};

export default FilledButton;
