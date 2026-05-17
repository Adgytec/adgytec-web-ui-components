import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar as AriaCalendar, Heading } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { CalendarGrid } from "../CalendarGrid";
import styles from "./calendar.module.css";

export const Calendar: React.FC<
    Omit<
        React.ComponentPropsWithRef<typeof AriaCalendar>,
        "children" | "visibleDuration" | "pageBehavior"
    > & {
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

            <CalendarGrid weekdayStyle={weekdayStyle} />
        </AriaCalendar>
    );
};
