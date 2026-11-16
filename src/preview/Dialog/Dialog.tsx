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
                                        queue.add({
                                            supportingText:
                                                "Squirrels belong to the rodent family Sciuridae",
                                        });
                                    }}
                                >
                                    Squirrel
                                </Button>,
                            ]}
                        >
                            <div
                                style={{
                                    textAlign: "justify",
                                    display: "grid",
                                    gap: "4px",
                                }}
                            >
                                <p>
                                    Squirrels are small- to medium-sized rodents
                                    belonging to the family Sciuridae, a diverse
                                    group that includes tree squirrels, ground
                                    squirrels, chipmunks, marmots, and flying
                                    squirrels. Found natively on every continent
                                    except Antarctica and Australia, they have
                                    adapted to habitats ranging from dense
                                    tropical rainforests to urban parks. They
                                    are easily recognized by their slender
                                    bodies, large eyes, and bushy tails, which
                                    serve multiple purposes including balance
                                    during leaps, communication with other
                                    squirrels, and warmth during cold weather.
                                    Like all rodents, squirrels possess four
                                    front teeth that never stop growing,
                                    requiring them to constantly gnaw on nuts,
                                    bark, and other hard materials to keep their
                                    incisors worn down.
                                </p>

                                <p>
                                    Beyond their agility, squirrels are
                                    remarkably intelligent and resourceful
                                    foragers. Most species practice
                                    scatter-hoarding, burying thousands of nuts
                                    and seeds across wide areas to prepare for
                                    winter. They rely on sharp spatial memory
                                    and an acute sense of smell to retrieve up
                                    to 80 percent of their hidden caches, even
                                    beneath a foot of snow. To protect their
                                    food supply from thieves like birds and
                                    rival squirrels, they often engage in
                                    deceptive caching by pretending to bury a
                                    nut in an empty hole while secretly hiding
                                    the real one elsewhere. Additionally, tree
                                    squirrels possess specialized ankle joints
                                    that rotate 180 degrees, allowing them to
                                    climb down tree trunks headfirst with ease.
                                </p>

                                <p>
                                    Ecologically, squirrels play a vital role as
                                    nature's gardeners. Because they inevitably
                                    forget or leave behind a portion of the
                                    thousands of seeds and acorns they bury each
                                    year, those forgotten caches sprout into new
                                    trees and plants, actively regenerating
                                    forests. While they primarily eat nuts,
                                    seeds, fruits, and fungi, squirrels are
                                    opportunistic omnivores that occasionally
                                    consume insects, eggs, or small vertebrates
                                    when food is scarce. Their adaptability,
                                    quick reflexes, and problem-solving
                                    abilities have made them one of the most
                                    resilient and familiar wildlife species
                                    around the world.
                                </p>
                            </div>
                        </ActionDialog>
                    </Modal>
                </ModalOverlay>
            </DialogTrigger>
        </div>
    );
};

export default DialogPreview;
