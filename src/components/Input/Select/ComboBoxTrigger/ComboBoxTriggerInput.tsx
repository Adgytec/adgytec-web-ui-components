import { clsx } from "clsx";
import { Input, type InputProps } from "react-aria-components";

export const ComboBoxTriggerInput: React.FC<InputProps> = ({
    className,
    ...props
}) => {
    return (
        <Input
            className={(renderProps) =>
                clsx(
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
