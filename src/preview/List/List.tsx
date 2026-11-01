import clsx from "clsx";
import { Activity, EllipsisVertical } from "lucide-react";
import { Heading } from "react-aria-components";
import { typography } from "@/utils";
import { Checkbox } from "../../components/Input";
import {
    ListAction,
    ListAvatar,
    ListBox,
    ListIcon,
    ListItem,
    ListLabelText,
    ListMedia,
    ListMediaImageHeight,
    ListMediaImageWidth,
    ListMediaLargeVideoHeight,
    ListMediaLargeVideoWidth,
    ListMediaVideoHeight,
    ListMediaVideoWidth,
    ListOverlineText,
    ListSupportingText,
} from "../../components/List";

const ListRadio = () => {
    return (
        <div className="items-grid list-preview">
            <Heading
                className={clsx(
                    typography.headlineLargeEmphasized,
                    "list-heading"
                )}
            >
                Radio
            </Heading>
        </div>
    );
};

const ListSelection = () => {
    return (
        <div className="items-grid list-preview">
            <Heading
                className={clsx(
                    typography.headlineLargeEmphasized,
                    "list-heading"
                )}
            >
                Selection
            </Heading>

            <ListBox selectionMode="multiple" selectionIndicator="leading">
                <ListItem
                    selectionIndicator="leading"
                    leading={<Checkbox slot="selection" />}
                    label={<ListLabelText>List item</ListLabelText>}
                    supporting={
                        <ListSupportingText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </ListSupportingText>
                    }
                />

                <ListItem
                    leading={
                        <ListMedia variant="image">
                            <img
                                src="https://picsum.photos/56/56"
                                alt=""
                                width={ListMediaImageWidth}
                                height={ListMediaImageHeight}
                            />
                        </ListMedia>
                    }
                    label={<ListLabelText>List item</ListLabelText>}
                    supporting={
                        <ListSupportingText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </ListSupportingText>
                    }
                    trailing={[<Checkbox key="selection" slot="selection" />]}
                />

                <ListItem
                    leading={
                        <ListMedia variant="video">
                            <img
                                src="https://picsum.photos/100/56"
                                alt=""
                                width={ListMediaVideoWidth}
                                height={ListMediaVideoHeight}
                            />
                        </ListMedia>
                    }
                    label={<ListLabelText>List item</ListLabelText>}
                    supporting={
                        <ListSupportingText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </ListSupportingText>
                    }
                    trailing={[<Checkbox key="selection" slot="selection" />]}
                />

                <ListItem
                    leading={
                        <ListMedia variant="large-video">
                            <img
                                src="https://picsum.photos/114/64"
                                alt=""
                                width={ListMediaLargeVideoWidth}
                                height={ListMediaLargeVideoHeight}
                            />
                        </ListMedia>
                    }
                    label={<ListLabelText>List item</ListLabelText>}
                    supporting={
                        <ListSupportingText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </ListSupportingText>
                    }
                    trailing={[<Checkbox key="selection" slot="selection" />]}
                />

                <ListItem
                    leading={<ListIcon icon={Activity} />}
                    id="two"
                    label={<ListLabelText>Lorem ipsum</ListLabelText>}
                    overline={<ListOverlineText>Sample</ListOverlineText>}
                    trailing={[
                        <ListAction
                            key="ellipsis"
                            color="tonal"
                            width="narrow"
                            icon={EllipsisVertical}
                        />,
                    ]}
                />

                <ListItem
                    id="five"
                    isDisabled
                    label={<ListLabelText>Lorem ipsum</ListLabelText>}
                    overline={<ListOverlineText>Sample</ListOverlineText>}
                    trailing={[<Checkbox key="selection" slot="selection" />]}
                />

                <ListItem
                    leading={<ListAvatar>R</ListAvatar>}
                    id="three"
                    label={<ListLabelText>Lorem ipsum</ListLabelText>}
                    overline={<ListOverlineText>Sample</ListOverlineText>}
                    trailing={[<Checkbox key="selection" slot="selection" />]}
                />

                <ListItem
                    id="four"
                    overline={<ListOverlineText>Sample</ListOverlineText>}
                    label={<ListLabelText>Lorem ipsum</ListLabelText>}
                    supporting={
                        <ListSupportingText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin id velit quis est gravida aliquam.
                        </ListSupportingText>
                    }
                    trailing={[<Checkbox key="selection" slot="selection" />]}
                />
            </ListBox>
        </div>
    );
};

export const ListPreview = () => {
    return (
        <div className="items-grid">
            <ListRadio />

            <ListSelection />
        </div>
    );
};

export default ListPreview;
