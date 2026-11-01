import { Fragment } from "react";
import { DialogTrigger } from "react-aria-components";
import { Button } from "../../components/Button";
import { ModalOverlay } from "../../components/Dialog";
import {
    type SheetLayout,
    SideSheet,
    type SideSheetAlignment,
    SideSheetModal,
} from "../../components/Sheets";
import { SearchFieldPreview } from "../SearchField";

export const RenderSideSheet = ({
    alignment,
    layout,
}: {
    alignment: SideSheetAlignment;
    layout: SheetLayout;
}) => {
    const sideSheetActions = [
        <Button key="save">Save</Button>,
        <Button color="text" key="close" slot="close">
            Close
        </Button>,
    ];

    const sideSheetActionsStart = [
        <Button color="text" key="close" slot="close">
            Close
        </Button>,
        <Button key="save">Save</Button>,
    ];

    return (
        <DialogTrigger>
            <Button color="outlined">{`${alignment}-${layout}`}</Button>

            <ModalOverlay isDismissable>
                <SideSheetModal alignment={alignment} layout={layout}>
                    <SideSheet
                        actions={
                            alignment === "start"
                                ? sideSheetActionsStart
                                : sideSheetActions
                        }
                        headline={`${alignment}-${layout}`}
                    >
                        <SearchFieldPreview />
                    </SideSheet>
                </SideSheetModal>
            </ModalOverlay>
        </DialogTrigger>
    );
};

export const SideSheetPreview = () => {
    const alignments: SideSheetAlignment[] = ["start", "end"];
    const layouts: SheetLayout[] = ["standard", "detached"];

    return (
        <div className="items">
            {alignments.map((alignment) => (
                <Fragment key={alignment}>
                    {layouts.map((layout) => (
                        <RenderSideSheet
                            key={layout}
                            layout={layout}
                            alignment={alignment}
                        />
                    ))}
                </Fragment>
            ))}
        </div>
    );
};

export default SideSheetPreview;
