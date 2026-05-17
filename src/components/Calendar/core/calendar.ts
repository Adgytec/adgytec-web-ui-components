import styles from "./calendar.module.css";

export type CalendarContainer = "standard" | "docked";

export const CalendarBaseStyles = styles["calendar"];

export const CalendarContainerStyles = (containerType: CalendarContainer) => {
    return styles[containerType];
};

export const CalendarHeaderStyles = styles["actions"];
