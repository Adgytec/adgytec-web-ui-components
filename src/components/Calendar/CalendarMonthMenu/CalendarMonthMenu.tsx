import { Button } from "@/components/Button";

export const CalendarMonthMenu: React.FC<{
    onSelection: () => void;
}> = ({ onSelection }) => {
    return (
        <div data-menu>
            month menu
            <Button slot={null} onPress={onSelection}>
                calendar
            </Button>
        </div>
    );
};
