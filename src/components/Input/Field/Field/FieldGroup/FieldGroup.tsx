import clsx from "clsx";
import { composeRenderProps, Group } from "react-aria-components";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import styles from "./fieldGroup.module.css";
import type { FieldGroupProps } from "./types";

export const FieldGroup: React.FC<FieldGroupProps> = ({
    label,
    description,
    errorMessage,
    hasLeading = false,
    hasTrailing = false,
    ...props
}) => {
    const dataAttrs = {
        "data-leading": hasLeading || undefined,
        "data-trailing": hasTrailing || undefined,
    };

    return (
        <Group
            {...props}
            {...dataAttrs}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["group"], className)
            )}
        >
            {composeRenderProps(props.children, (children, { isInvalid }) => {
                return (
                    <>
                        {label && (
                            <Label className={clsx(styles["label"])}>
                                {label}
                            </Label>
                        )}

                        {children}

                        {!isInvalid && description && (
                            <Description
                                className={clsx(styles["supporting-text"])}
                            >
                                {description}
                            </Description>
                        )}

                        <FieldError className={clsx(styles["supporting-text"])}>
                            {errorMessage}
                        </FieldError>
                    </>
                );
            })}
        </Group>
    );
};
