import clsx from "clsx";
import { usePress } from "react-aria/usePress";
import { CalendarCell as AriaCalendarCell } from "react-aria-components";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { typography } from "@/utils";
import styles from "./calendarCell.module.css";

export const CalendarCell: React.FC<
    Omit<React.ComponentPropsWithRef<typeof AriaCalendarCell>, "children"> & {
        isRangeCalendar?: boolean;
    }
> = ({ className, isRangeCalendar = false, ...props }) => {
    const { splashInfo, handlePress } = useSplash();
    const { pressProps } = usePress({ onPress: handlePress });

    return (
        <AriaCalendarCell
            className={(renderProps) =>
                clsx(
                    styles["cell"],
                    typography.bodyLarge,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...pressProps}
            {...props}
            data-range-calendar={isRangeCalendar || undefined}
        >
            {({
                formattedDate,
                isDisabled,
                isOutsideVisibleRange,
                isOutsideMonth,
                isInvalid,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
            }) => {
                const inBetweenRange =
                    isRangeCalendar &&
                    isSelected &&
                    !isSelectionStart &&
                    !isSelectionEnd;

                const disableSplash =
                    isDisabled || isOutsideMonth || isOutsideVisibleRange;

                return (
                    <>
                        {!disableSplash && splashInfo && (
                            <span className={clsx(styles["splash-container"])}>
                                <Splash {...splashInfo} />
                            </span>
                        )}

                        {isRangeCalendar && (
                            <span
                                className={clsx(styles["range-indicator"])}
                                data-in-range={inBetweenRange || undefined}
                                data-selection-start={
                                    isSelectionStart || undefined
                                }
                                data-selection-end={isSelectionEnd || undefined}
                                data-invalid={isInvalid || undefined}
                                data-disabeld={isDisabled || undefined}
                                data-outside-month={isOutsideMonth || undefined}
                                data-outside-visible-range={
                                    isOutsideVisibleRange || undefined
                                }
                            ></span>
                        )}

                        {formattedDate}
                    </>
                );
            }}
        </AriaCalendarCell>
    );
};
