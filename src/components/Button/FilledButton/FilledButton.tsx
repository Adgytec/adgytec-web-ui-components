import type { ButtonVariantProps } from "@/components/Button/ButtonBase";
import { Button } from "@/components/Button/ButtonBase/Button";

export const FilledButton = (props: ButtonVariantProps) => {
  const { children } = props;
  return (
    <Button {...props} variant="filled">
      {children}
    </Button>
  );
};
