import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Calendar as AriaCalendar,
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHeader,
    CalendarHeaderCell,
    Heading,
} from "react-aria-components";
import { IconButton } from "@/components/Button";
import { typography } from "@/utils";
import styles from "./calendar.module.css";

export const Calendar: React.FC<
    Omit<React.ComponentPropsWithRef<typeof AriaCalendar>, "children"> & {
        weekdayStyle?: "narrow" | "short" | "long";
    }
> = ({ weekdayStyle, className, ...props }) => {
    return (
        <AriaCalendar
            className={(renderProps) =>
                clsx(
                    styles["calendar"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            <header className={clsx(styles["actions"])}>
                <IconButton
                    slot="previous"
                    icon={ChevronLeft}
                    color="standard"
                />
                <Heading />
                <IconButton slot="next" icon={ChevronRight} color="standard" />
            </header>

            <CalendarGrid
                weekdayStyle={weekdayStyle}
                className={clsx(styles["grid"])}
            >
                <CalendarGridHeader className={clsx(styles["header"])}>
                    {(day) => (
                        <CalendarHeaderCell
                            className={clsx(
                                styles["header-cell"],
                                typography.bodyLarge
                            )}
                        >
                            {day}
                        </CalendarHeaderCell>
                    )}
                </CalendarGridHeader>

                <CalendarGridBody className={clsx(styles["body"])}>
                    {(date) => (
                        <CalendarCell
                            className={clsx(
                                styles["cell"],
                                typography.bodyLarge
                            )}
                            date={date}
                        />
                    )}
                </CalendarGridBody>
            </CalendarGrid>
        </AriaCalendar>
    );
};
