import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar as AriaCalendar, Heading } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { CalendarGrid } from "../CalendarGrid";
import {
    CalendarBaseStyles,
    type CalendarContainer,
    CalendarContainerStyles,
    CalendarHeaderStyles,
} from "../core";

export const Calendar: React.FC<
    Omit<
        React.ComponentPropsWithRef<typeof AriaCalendar>,
        "children" | "visibleDuration" | "pageBehavior"
    > & {
        weekdayStyle?: "narrow" | "short" | "long";
        containerStyle?: CalendarContainer;
    }
> = ({ weekdayStyle, className, containerStyle = "standard", ...props }) => {
    return (
        <AriaCalendar
            className={(renderProps) =>
                clsx(
                    CalendarBaseStyles,
                    CalendarContainerStyles(containerStyle),
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            <header className={clsx(CalendarHeaderStyles)}>
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
