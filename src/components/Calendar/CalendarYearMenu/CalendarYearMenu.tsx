import { Button } from "@/components/Button";

export const CalendarYearMenu: React.FC<{
    onSelection: () => void;
}> = ({ onSelection }) => {
    return (
        <div data-menu>
            year menu
            <Button slot={null} onPress={onSelection}>
                calendar
            </Button>
        </div>
    );
};
