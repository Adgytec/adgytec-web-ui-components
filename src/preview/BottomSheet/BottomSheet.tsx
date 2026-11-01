import clsx from "clsx";
import { DialogTrigger } from "react-aria-components";
import { Button } from "../../components/Button";
import { ModalOverlay } from "../../components/Dialog";
import {
    BottomSheet,
    BottomSheetModal,
    type SheetLayout,
} from "../../components/Sheets";
import { typography } from "../../utils/typography";

export const RenderBottomSheet = ({ layout }: { layout: SheetLayout }) => {
    return (
        <DialogTrigger>
            <Button color="outlined">{layout}</Button>

            <ModalOverlay isDismissable>
                <BottomSheetModal layout={layout}>
                    <BottomSheet>
                        <h3 className={clsx(typography.titleMediumEmphasized)}>
                            Some Action
                        </h3>

                        <p className={clsx(typography.bodyLarge)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis eros nulla, commodo a finibus malesuada,
                            cursus non metus.
                        </p>

                        <div
                            className="items"
                            style={{
                                marginBlockStart: "16px",
                                justifyContent: "end",
                            }}
                        >
                            <Button color="text" slot="close">
                                Cancel
                            </Button>
                            <Button>Save</Button>
                        </div>
                    </BottomSheet>
                </BottomSheetModal>
            </ModalOverlay>
        </DialogTrigger>
    );
};

export const BottomSheetPreview = () => {
    const layouts: SheetLayout[] = ["standard", "detached"];

    return (
        <div className="items">
            {layouts.map((layout) => (
                <RenderBottomSheet key={layout} layout={layout} />
            ))}
        </div>
    );
};

export default BottomSheetPreview;
