import { SheetTrigger } from "react-aria-components";
import { Button } from "@/components/Button";
import { BottomSwipeSheet, BottomSwipeSheetOverlay } from "@/components/Sheets";
import { ConfigPreview } from "../Config";

export const BottomSwipeSheetPreview = () => {
    return (
        <div className="items">
            <SheetTrigger>
                <Button color="elevated">swipe sheet</Button>

                <BottomSwipeSheetOverlay snapPoints={["33dvb"]}>
                    <BottomSwipeSheet>
                        <ConfigPreview />
                    </BottomSwipeSheet>
                </BottomSwipeSheetOverlay>
            </SheetTrigger>
        </div>
    );
};
