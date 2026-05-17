import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    RangeCalendar as AriaRangeCalendar,
    Heading,
} from "react-aria-components";
import { IconButton } from "@/components/Button";
import { CalendarGrid } from "../CalendarGrid";
import {
    CalendarBaseStyles,
    type CalendarContainer,
    CalendarContainerStyles,
    CalendarHeaderStyles,
} from "../core";

export const RangeCalendar: React.FC<
    Omit<
        React.ComponentPropsWithRef<typeof AriaRangeCalendar>,
        "children" | "visibleDuration" | "pageBehavior"
    > & {
        weekdayStyle?: "narrow" | "short" | "long";
        containerStyle?: CalendarContainer;
    }
> = ({ weekdayStyle, className, containerStyle = "standard", ...props }) => {
    return (
        <AriaRangeCalendar
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

            <CalendarGrid isRangeCalendar weekdayStyle={weekdayStyle} />
        </AriaRangeCalendar>
    );
};
