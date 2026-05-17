import clsx from "clsx";
import { usePress } from "react-aria/usePress";
import { CalendarCell as AriaCalendarCell } from "react-aria-components";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { typography } from "@/utils";
import styles from "./calendarCell.module.css";

export const CalendarCell: React.FC<
    Omit<React.ComponentPropsWithRef<typeof AriaCalendarCell>, "children">
> = ({ className, ...props }) => {
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
        >
            {({
                formattedDate,
                isDisabled,
                isOutsideVisibleRange,
                isOutsideMonth,
            }) => {
                const disableSplash =
                    isDisabled || isOutsideMonth || isOutsideVisibleRange;

                return (
                    <>
                        {!disableSplash && splashInfo && (
                            <span className={clsx(styles["splash-container"])}>
                                <Splash {...splashInfo} />
                            </span>
                        )}

                        {formattedDate}
                    </>
                );
            }}
        </AriaCalendarCell>
    );
};
