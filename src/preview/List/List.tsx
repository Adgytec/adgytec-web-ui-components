import clsx from "clsx";
import {
    Activity,
    Bluetooth,
    BluetoothOff,
    EllipsisVertical,
    ExternalLink,
    Flashlight,
    FlashlightOff,
    Touchpad,
    TouchpadOff,
    Wifi,
    WifiOff,
} from "lucide-react";
import { useState } from "react";
import { Heading } from "react-aria-components";
import { typography } from "@/utils";
import { Checkbox, Switch } from "../../components/Input";
import {
    GridListBox,
    GridListItem,
    ListAction,
    ListAvatar,
    ListBox,
    ListIcon,
    ListItem,
    ListLabelText,
    ListLinkAction,
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
                    selectionIndicator="trailing"
                    leading={<ListIcon icon={Activity} />}
                    id="two"
                    label={<ListLabelText>Lorem ipsum</ListLabelText>}
                    overline={<ListOverlineText>Sample</ListOverlineText>}
                    trailing={[<Checkbox key="selection" slot="selection" />]}
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

const ListSwitch = () => {
    const [selection, setSelection] = useState((1 << 4) - 1);

    const settings = [
        {
            label: "Wifi",
            icon: Wifi,
            offIcon: WifiOff,
            supporting: "Connect to available wireless networks.",
        },
        {
            label: "Bluetooth",
            icon: Bluetooth,
            offIcon: BluetoothOff,
            supporting: "Connect to nearby Bluetooth devices.",
        },
        {
            label: "Flashlight",
            icon: Flashlight,
            offIcon: FlashlightOff,
            supporting: "Turn the device flashlight on or off.",
        },
        {
            label: "Touchpad",
            icon: Touchpad,
            offIcon: TouchpadOff,
            supporting: "Enable or disable the touchpad.",
        },
    ];

    const handleSelectionChange = (bit: number, isSelected: boolean) => {
        setSelection((prev) =>
            isSelected ? prev | (1 << bit) : prev & ~(1 << bit)
        );
    };

    const toggleSelection = (bit: number) => {
        setSelection((prev) => prev ^ (1 << bit));
    };

    const isSelected = (bit: number) => (selection & (1 << bit)) !== 0;

    return (
        <div className="items-grid list-preview">
            <Heading
                className={clsx(
                    typography.headlineLargeEmphasized,
                    "list-heading"
                )}
            >
                Switch
            </Heading>

            <GridListBox>
                {settings.map(({ label, icon, offIcon, supporting }, index) => {
                    const selected = isSelected(index);

                    return (
                        <GridListItem
                            key={label}
                            onAction={() => toggleSelection(index)}
                            leading={
                                <ListIcon icon={selected ? icon : offIcon} />
                            }
                            label={<ListLabelText>{label}</ListLabelText>}
                            supporting={
                                <ListSupportingText>
                                    {supporting}
                                </ListSupportingText>
                            }
                            trailing={[
                                <Switch
                                    key="selection"
                                    icon="both"
                                    selectedIcon={icon}
                                    unselectedIcon={offIcon}
                                    isSelected={selected}
                                    onChange={(value) =>
                                        handleSelectionChange(index, value)
                                    }
                                />,
                            ]}
                        />
                    );
                })}
            </GridListBox>
        </div>
    );
};

const GridListSelection = () => {
    return (
        <div className="items-grid list-preview">
            <Heading
                className={clsx(
                    typography.headlineLargeEmphasized,
                    "list-heading"
                )}
            >
                GridList
            </Heading>

            <GridListBox
                aria-label="Grid list example"
                selectionMode="multiple"
                selectionIndicator="leading"
            >
                <GridListItem
                    id="grid-item-1"
                    selectionIndicator="leading"
                    leading={<Checkbox slot="selection" />}
                    label={<ListLabelText>Grid item 1</ListLabelText>}
                    supporting={
                        <ListSupportingText>
                            Item in GridListBox with selection indicator.
                        </ListSupportingText>
                    }
                    trailing={[
                        <ListLinkAction
                            key="link"
                            href="https://example.com"
                            target="_blank"
                            icon={ExternalLink}
                            aria-label="Open link"
                        />,
                        <ListAction
                            key="ellipsis"
                            color="tonal"
                            width="narrow"
                            icon={EllipsisVertical}
                        />,
                    ]}
                />

                <GridListItem
                    id="grid-item-2"
                    leading={<ListIcon icon={Wifi} />}
                    label={<ListLabelText>Grid item 2</ListLabelText>}
                    supporting={
                        <ListSupportingText>
                            Secondary text describing the grid item.
                        </ListSupportingText>
                    }
                    trailing={[<Checkbox key="selection" slot="selection" />]}
                />
            </GridListBox>
        </div>
    );
};

export const ListPreview = () => {
    return (
        <div className="items-grid">
            <ListSwitch />

            <GridListSelection />

            <ListSelection />
        </div>
    );
};

export default ListPreview;
