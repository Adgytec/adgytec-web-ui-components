import { clsx } from "clsx";
import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Loader } from "@/components/Loader";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { TapTarget } from "@/utils/tapTarget";
import {
    ButtonCore,
    ButtonIconSizeMapping,
    ButtonLabelTextMapping,
    ButtonReset,
    ButtonSizeBase,
    buttonColorBase,
    buttonColorConfig,
    buttonSizeConfig,
    newButtonBaseDataAttrs,
    useButtonConfig,
    withTooltip,
} from "../core";
import type { ButtonProps } from "./types";

/**
 * A standard action button component implementing Material Design 3 guidelines.
 *
 * Supports filled, tonal, outlined, elevated, and text visual color schemes,
 * flexible sizing presets from extra-small to extra-large, leading or trailing icons,
 * loading spinner substitution when pending, ripple splash effects, and integrated tooltips.
 *
 * Built on top of React Aria's `Button` for accessible keyboard, screen reader,
 * and touch interaction.
 *
 * @example
 * ```tsx
 * <Button color="tonal" icon={Save} onPress={() => handleSave()}>
 *     Save
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
    size,
    shape,
    color,
    tooltip,
    icon,
    children,
    onPress,
    iconPlacement,
    className,
    ...props
}) => {
    const { buttonColor, buttonShape, buttonSize, buttonIconPlacement } =
        useButtonConfig({
            size,
            shape,
            color,
            iconPlacement,
        });

    const { splashInfo, handlePress } = useSplash(onPress);
    const isChildFunc = typeof children === "function";

    const baseButtonDataAttrs = newButtonBaseDataAttrs({
        shape: buttonShape,
        size: buttonSize,
        color: buttonColor,
    });

    return withTooltip(
        <AriaButton
            onPress={handlePress}
            className={(renderProps) =>
                clsx(
                    ButtonReset,
                    TapTarget,
                    buttonSizeConfig(buttonSize),
                    buttonColorConfig(buttonColor),
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            {...baseButtonDataAttrs}
            data-button
        >
            {(renderProps) => {
                const {
                    isPending,
                    isDisabled,
                    isFocusVisible,
                    isFocused,
                    isPressed,
                    isHovered,
                } = renderProps;

                const dataAttrs = {
                    ...baseButtonDataAttrs,
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-pressed": isPressed || undefined,
                    "data-visual-button": true,
                };

                const iconSize = ButtonIconSizeMapping[buttonSize];
                const iconComp = isPending ? (
                    <Loader size={iconSize} />
                ) : (
                    icon && <Icon icon={icon} size={iconSize} />
                );
                return (
                    <span
                        className={clsx(
                            ButtonCore,
                            buttonColorBase,
                            ButtonSizeBase,
                            ButtonLabelTextMapping[buttonSize]
                        )}
                        {...dataAttrs}
                    >
                        {splashInfo && <Splash {...splashInfo} />}

                        {buttonIconPlacement === "start" && iconComp}

                        {isChildFunc ? children(renderProps) : children}

                        {buttonIconPlacement === "end" && iconComp}
                    </span>
                );
            }}
        </AriaButton>,
        tooltip
    );
};
