import { Calendar } from "../../components/Calendar";
import { typography } from "../../utils/typography";

export const CalendarPreview = () => {
    return (
        <div className="items-grid" data-calendar>
            <div>
                <h3 className={typography.titleLargeEmphasized}>Standard</h3>

                <div className="items">
                    <Calendar selectionMode="multiple" />

                    <Calendar className="calendar-vibrant" />
                </div>
            </div>

            <div>
                <h3 className={typography.titleLargeEmphasized}>States</h3>

                <div className="items">
                    <Calendar isDisabled />

                    <Calendar isInvalid />

                    <Calendar
                        isDateUnavailable={({ day }) => {
                            return day % 2 === 0;
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CalendarPreview;
