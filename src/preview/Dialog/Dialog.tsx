import clsx from "clsx";
import { Squirrel } from "lucide-react";
import { DialogTrigger } from "react-aria-components";
import { Button } from "../../components/Button";
import {
    ActionDialog,
    Dialog,
    DialogBodyTypography,
    DialogHeadlineTypography,
    Modal,
    ModalOverlay,
} from "../../components/Dialog";
import { Divider } from "../../components/Divider";
import { useSnackbarQueue } from "../../components/Snackbar";

export const DialogPreview = () => {
    const queue = useSnackbarQueue();
    return (
        <div className="items">
            <DialogTrigger>
                <Button>Simple Dialog</Button>

                <ModalOverlay isDismissable>
                    <Modal>
                        <Dialog
                            style={{
                                display: "grid",
                                gap: "1rem",
                            }}
                        >
                            <div>
                                <h2
                                    slot="title"
                                    className={clsx(DialogHeadlineTypography)}
                                >
                                    Simple Dialog
                                </h2>

                                <Divider />
                            </div>

                            <div className={clsx(DialogBodyTypography)}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus vehicula enim eu
                                    tortor semper faucibus. Nullam vitae
                                    pulvinar ligula. Nulla consequat, tortor
                                    quis volutpat luctus, ipsum sem venenatis
                                    augue, gravida feugiat ligula nulla vitae
                                    tortor.
                                </p>
                            </div>

                            <div>
                                <Divider />

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <Button color="text" slot="close">
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </Dialog>
                    </Modal>
                </ModalOverlay>
            </DialogTrigger>

            <DialogTrigger>
                <Button color="elevated">Action Dialog</Button>

                <ModalOverlay>
                    <Modal>
                        <ActionDialog
                            divider="all"
                            heading="Squirrel?"
                            icon={Squirrel}
                            actions={[
                                <Button color="text" slot="close" key="close">
                                    Close
                                </Button>,
                                <Button
                                    color="text"
                                    key="Squirrel"
                                    onPress={() => {
                                        queue.add(
                                            {
                                                supportingText:
                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                            },
                                            { timeout: 2000 }
                                        );
                                    }}
                                >
                                    Squirrel
                                </Button>,
                            ]}
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus vehicula enim eu
                                tortor semper faucibus. Nullam vitae pulvinar
                                ligula. Nulla consequat, tortor quis volutpat
                                luctus, ipsum sem venenatis augue, gravida
                                feugiat ligula nulla vitae tortor. Praesent
                                commodo ac metus eu lobortis. Ut aliquam
                                dignissim lacus vulputate imperdiet. Donec lorem
                                dolor, semper commodo sollicitudin ut, pharetra
                                eget ipsum. Cras ac aliquet felis. Sed non arcu
                                luctus, pulvinar nulla nec, ornare velit.
                                Suspendisse eget metus vel ligula sollicitudin
                                pulvinar sit amet vel metus. Pellentesque auctor
                                gravida varius. Integer mollis arcu enim, eu
                                malesuada sem mollis ut. Praesent vel mollis
                                risus. Ut molestie eleifend neque, eget
                                scelerisque eros. Aenean et metus eleifend justo
                                pulvinar vestibulum. Aenean facilisis odio ut
                                pharetra pretium. Aenean semper tortor sit amet
                                magna malesuada congue.
                            </p>
                            <br />
                            <p>
                                Quisque tellus tellus, pharetra nec ex et,
                                malesuada cursus ante. Nulla tincidunt placerat
                                sapien, a aliquet velit placerat quis. Maecenas
                                pharetra et nulla a pharetra. Praesent tincidunt
                                ullamcorper lacus vitae imperdiet. Sed fringilla
                                sem vel magna dignissim pretium. In vehicula
                                fringilla lacinia. In fringilla nunc a lorem
                                pulvinar, ac lacinia ante semper. Cras faucibus,
                                odio eget dignissim blandit, risus tortor
                                aliquam massa, ut varius diam est at orci.
                                Vivamus non turpis eu nisl fringilla
                                pellentesque non in mauris. Sed feugiat eros et
                                est dignissim, non condimentum risus
                                ullamcorper. Vivamus in purus neque. Phasellus
                                sed libero et nisl luctus tincidunt vitae in
                                nibh.
                            </p>
                            <br />
                            <p>
                                Sed rhoncus erat eget vehicula aliquam. Aenean
                                luctus auctor metus eu elementum. Duis hendrerit
                                metus non erat porttitor, nec dignissim mauris
                                pretium. Quisque porttitor, lacus eu condimentum
                                interdum, diam tortor consectetur augue, in
                                pellentesque est nibh et ipsum. Sed vel
                                consectetur magna. Ut id tincidunt risus.
                                Integer interdum augue eu ex tincidunt, et
                                faucibus nunc blandit. Praesent suscipit
                                placerat luctus. Ut odio turpis, varius cursus
                                erat at, lacinia suscipit libero.
                            </p>
                            <br />
                            <p>
                                Praesent sed neque porttitor, gravida massa
                                eget, aliquet nulla. Nam tristique, sapien nec
                                posuere feugiat, enim purus ullamcorper nibh, at
                                vehicula nibh diam id metus. Duis purus libero,
                                scelerisque et volutpat sit amet, dapibus non
                                ante. Ut sagittis scelerisque efficitur. Nulla
                                ut pretium erat. Suspendisse potenti. Donec
                                vulputate nibh quis arcu placerat laoreet.
                                Aenean enim est, rutrum blandit semper ut,
                                mollis a elit. Suspendisse at varius tortor.
                                Etiam molestie in urna sit amet pellentesque.
                                Fusce justo augue, porta at consequat sit amet,
                                blandit in dolor. Aliquam erat volutpat. Donec
                                ultricies eleifend arcu quis fringilla. Etiam
                                sit amet scelerisque sapien.
                            </p>
                        </ActionDialog>
                    </Modal>
                </ModalOverlay>
            </DialogTrigger>
        </div>
    );
};

export default DialogPreview;
