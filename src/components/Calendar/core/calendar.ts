import type { CalendarDate } from "@internationalized/date";
import styles from "./calendar.module.css";

export const CalendarBaseStyles = styles["calendar"];

export const CalendarHeaderStyles = styles["actions"];

export type WeekdayStyle = "narrow" | "short" | "long";

export interface MonthItem {
    id: number;
    date: CalendarDate;
    formatted: string;
}

export interface YearItem {
    id: number;
    date: CalendarDate;
    formatted: string;
}
