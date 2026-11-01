import { RangeCalendar } from "../../components/Calendar";
import { typography } from "../../utils/typography";

export const RangeCalendarPreview = () => {
    return (
        <div className="items-grid" data-calendar>
            <div>
                <h3 className={typography.titleLargeEmphasized}>Standard</h3>

                <div className="items">
                    select
                    <RangeCalendar commitBehavior="select" />
                    reset
                    <RangeCalendar commitBehavior="reset" />
                    clear
                    <RangeCalendar commitBehavior="clear" />
                    <RangeCalendar className="calendar-vibrant" />
                </div>
            </div>

            <div>
                <h3 className={typography.titleLargeEmphasized}>States</h3>

                <div className="items">
                    <RangeCalendar isDisabled />

                    <RangeCalendar isInvalid />

                    <RangeCalendar
                        isDateUnavailable={({ day }) => {
                            return day % 2 === 0;
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default RangeCalendarPreview;
