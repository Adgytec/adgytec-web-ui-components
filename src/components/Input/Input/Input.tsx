import clsx from "clsx";
import {
    Input as AriaInput,
    TextField as AriaTextField,
} from "react-aria-components";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import type { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
    label,
    description,
    errorMessage,
    placeholder,
    editorDir,
    prefix,
    suffix,
    trailing,
    className,
    ...props
}) => {
    return (
        <AriaTextField
            className={(renderProps) =>
                clsx(
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {label && <Label>{label}</Label>}

            <div>
                <div>
                    {prefix && prefix}
                    <AriaInput placeholder={placeholder} dir={editorDir} />
                    {suffix && suffix}
                </div>

                {trailing && trailing}
            </div>

            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </AriaTextField>
    );
};
