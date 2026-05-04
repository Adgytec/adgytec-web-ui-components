import { ChevronDown } from "lucide-react";
import { Button, type ButtonProps, SelectValue } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { TextFieldIconSize } from "../../core";

export const SelectTrigger: React.FC<Omit<ButtonProps, "children">> = (
    props
) => {
    return (
        <Button {...props}>
            <SelectValue />

            <Icon icon={ChevronDown} size={TextFieldIconSize} />
        </Button>
    );
};
