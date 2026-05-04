import { Button, type ButtonProps, SelectValue } from "react-aria-components";

export const SelectTrigger: React.FC<Omit<ButtonProps, "children">> = (
    props
) => {
    return (
        <Button {...props}>
            <SelectValue />
        </Button>
    );
};
