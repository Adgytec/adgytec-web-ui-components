import {
    Armchair,
    Bell,
    Clipboard,
    CloudSnow,
    CloudSun,
    DollarSign,
    Download,
    ExternalLinkIcon,
    Eye,
    FileBraces,
    Gamepad,
    Globe,
    GlobeLock,
    GlobeOff,
    HandCoins,
    LogOut,
    type LucideIcon,
    Mail,
    Mouse,
    MouseOff,
    Newspaper,
    PlaneTakeoff,
    Settings,
    Share2,
    ShoppingCart,
    Sofa,
    Squirrel,
    Sun,
    SunMoon,
    SunSnow,
    SwatchBook,
    User,
    UserRound,
} from "lucide-react";
import { type CSSProperties, Fragment, type ReactNode, useState } from "react";
import { useListData } from "react-aria-components/useListData";
import { Tooltip, TooltipTrigger } from "./components/Tooltip";
import "./styles/app.css";
import { CalendarDate } from "@internationalized/date";
import { clsx } from "clsx";
import type { Orientation } from "react-aria";
import {
    Collection,
    DialogTrigger,
    Form,
    SubmenuTrigger,
    TagGroup,
    TagList,
} from "react-aria-components";
import { useLocalStorage } from "usehooks-ts";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@/components/Tabs";
import {
    Button,
    type ButtonColor,
    ButtonGroup,
    type ButtonShape,
    type ButtonSize,
    ConnectedButton,
    ConnectedButtonGroup,
    type ConnectedButtonGroupColor,
    type CoreButtonColor,
    IconButton,
    type IconButtonColor,
    type IconButtonWidth,
    LinkButton,
    LinkIconButton,
    SplitButton,
    type SplitButtonColor,
    SplitButtonPrimary,
    SplitButtonTrigger,
    ToggleButton,
    ToggleIconButton,
} from "./components/Button";
import { Calendar, RangeCalendar } from "./components/Calendar";
import {
    ActionDialog,
    Dialog,
    DialogBodyTypography,
    DialogHeadlineTypography,
    Modal,
    ModalOverlay,
} from "./components/Dialog";
import {
    Disclosure,
    DisclosureGroup,
    DisclosureHeader,
    DisclosurePanel,
} from "./components/Disclosure";
import { Divider } from "./components/Divider";
import { Icon } from "./components/Icon";
import {
    CenteredSlider,
    ComboBox,
    ComboBoxPopover,
    ComboBoxTrigger,
    DateField,
    DatePicker,
    DateRangePicker,
    Input,
    InputButton,
    Label,
    RangeSlider,
    Select,
    SelectItem,
    SelectList,
    SelectListSection,
    SelectListSectionHeader,
    SelectPopover,
    SelectTrigger,
    Slider,
    SliderOutput,
    type SliderSize,
    Switch,
    TextArea,
    TimeField,
} from "./components/Input";
import { Checkbox, CheckboxGroup } from "./components/Input/Checkbox";
import { Radio, RadioGroup } from "./components/Input/Radio";
import {
    Menu,
    MenuItem,
    MenuPopover,
    MenuSection,
    MenuSectionHeader,
    MenuShortcut,
    MenuTrigger,
    SubmenuPopover,
} from "./components/Menu";
import { Popover } from "./components/Popover";
import { Tag } from "./components/Tag";
import { ThemeSelector } from "./components/ThemeSelector";
import {
    Toolbar,
    type ToolbarColor,
    type ToolbarVariant,
} from "./components/Toolbar";
import { ToolbarToggleButtonGroup } from "./components/Toolbar/ToolbarToggleButtonGroup";
import {
    RichTooltip,
    RichTooltipActions,
    RichTooltipInfo,
    RichTooltipSubhead,
    RichTooltipText,
} from "./components/Tooltip/RichTooltip";
import { typography } from "./utils/typography";

// preview container
const PreviewContainer = (props: { label: string; children: ReactNode }) => {
    return (
        <div className="preview-container">
            <h2 className={typography.headlineLargeEmphasized}>
                {props.label}
            </h2>
            <div className="preview-container__items">{props.children}</div>
        </div>
    );
};

const SwitchPreview = () => {
    return (
        <>
            <div className="items">
                <Switch isDisabled icon="none">
                    <Label>Disabled no icon</Label>
                </Switch>

                <Switch isDisabled icon="both">
                    <Label>Disabled with icon</Label>
                </Switch>

                <Switch isDisabled isSelected>
                    <Label>Disabled selected</Label>
                </Switch>

                <Switch>
                    <Label>Selected icon</Label>
                </Switch>

                <Switch className="switch-config">
                    <Label>Selected icon config</Label>
                </Switch>

                <Switch containerStateLayer icon="both">
                    <Label>Both icon</Label>
                </Switch>

                <Switch icon="none">
                    <Label>Icon none</Label>
                </Switch>
            </div>

            <div className="items-grid">
                <Switch isDisabled icon="none">
                    <Label>Disabled no icon</Label>
                </Switch>

                <Switch isDisabled icon="both">
                    <Label>Disabled with icon</Label>
                </Switch>

                <Switch isDisabled isSelected>
                    <Label>Disabled selected</Label>
                </Switch>

                <Switch>
                    <Label>Selected icon</Label>
                </Switch>

                <Switch className="switch-config" containerStateLayer>
                    <Label>Selected icon config</Label>
                </Switch>

                <Switch icon="both" containerStateLayer>
                    <Label>Both icon</Label>
                </Switch>

                <Switch icon="none">
                    <Label>Icon none</Label>
                </Switch>
            </div>
        </>
    );
};

const RadioPreview = () => {
    return (
        <>
            <RadioGroup
                label="Disabled"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia laoreet arcu, sit amet auctor ligula ultricies tincidunt. "
                isDisabled
                defaultValue={"dog"}
            >
                <Radio value="cat">Cat</Radio>
                <Radio value="dog">Dog</Radio>
                <Radio value="dragon">Dragon</Radio>
            </RadioGroup>

            <RadioGroup
                label="Disabled"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia laoreet arcu, sit amet auctor ligula ultricies tincidunt. "
                isDisabled
                orientation="horizontal"
            >
                <Radio value="cat">Cat</Radio>
                <Radio value="dog">Dog</Radio>
                <Radio value="dragon">Dragon</Radio>
            </RadioGroup>

            <RadioGroup
                label="Enabled"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia laoreet arcu, sit amet auctor ligula ultricies tincidunt. "
                isInvalid
                containerStateLayer
                showDescriptionOnInvalid
            >
                <Radio value="cat">Cat</Radio>
                <Radio value="dog">Dog</Radio>
                <Radio value="dragon">Dragon</Radio>
            </RadioGroup>

            <RadioGroup
                label="Enabled"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia laoreet arcu, sit amet auctor ligula ultricies tincidunt. "
                orientation="horizontal"
                labelPlacement="start"
                containerStateLayer
            >
                <Radio value="cat">Cat</Radio>
                <Radio value="dog">
                    <Label>Dog</Label>
                </Radio>
                <Radio value="dragon">Dragon</Radio>
            </RadioGroup>
        </>
    );
};

const CheckboxPreview = () => {
    return (
        <>
            <div className="items">
                <Checkbox isDisabled>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>

                <Checkbox isDisabled isSelected>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>

                <Checkbox containerStateLayer>
                    <Label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Label>
                </Checkbox>

                <Checkbox isIndeterminate isDisabled>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>

                <Checkbox isIndeterminate>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>

                <Checkbox isIndeterminate isInvalid>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>

                <Checkbox isIndeterminate isInvalid isDisabled>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>
            </div>

            <CheckboxGroup
                label="lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia laoreet arcu, sit amet auctor ligula ultricies tincidunt. "
                isDisabled
            >
                <Checkbox>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>

                <Checkbox isInvalid>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </Checkbox>

                <Checkbox>Lorem ipsum dolor sit amet, consectetur.</Checkbox>
            </CheckboxGroup>

            <CheckboxGroup
                label="lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia laoreet arcu, sit amet auctor ligula ultricies tincidunt. "
                containerStateLayer
            >
                <Checkbox value="one">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>

                <Checkbox value="two">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </Checkbox>

                <Checkbox value="three">
                    Lorem ipsum dolor sit amet, consectetur.
                </Checkbox>
            </CheckboxGroup>

            <CheckboxGroup
                isInvalid
                label="lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia laoreet arcu, sit amet auctor ligula ultricies tincidunt. "
                showDescriptionOnInvalid
                containerStateLayer
            >
                <Checkbox value="one">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>

                <Checkbox value="two">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </Checkbox>

                <Checkbox value="three">
                    Lorem ipsum dolor sit amet, consectetur.
                </Checkbox>
            </CheckboxGroup>
        </>
    );
};

const ThemeSelectorPreview = () => {
    return <ThemeSelector />;
};

const IconPreview = () => {
    return (
        <>
            <Icon icon={FileBraces} size={400} withText />

            <p
                style={{
                    fontSize: "5rem",
                    fontWeight: "400",
                }}
            >
                <Icon icon={FileBraces} withText strokeWidth={1.375} /> with
                text
            </p>
        </>
    );
};

const TooltipPreview = () => {
    return (
        <div className="items">
            <TooltipTrigger>
                <Button>Tooltip</Button>

                <Tooltip>Lorem ipsum dolor sit amet.</Tooltip>
            </TooltipTrigger>

            <DialogTrigger>
                <Button>Rich Tooltip</Button>

                <Popover>
                    <RichTooltip>
                        <RichTooltipInfo>
                            <RichTooltipSubhead>Lorem Ipsum</RichTooltipSubhead>

                            <RichTooltipText>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris porttitor laoreet purus
                                eu elementum. Vestibulum vitae vulputate justo,
                                ac feugiat dolor.
                            </RichTooltipText>
                        </RichTooltipInfo>

                        <RichTooltipActions>
                            <LinkButton
                                color="text"
                                href="https://m3.material.io/components/tooltips/guidelines"
                                target="_blank"
                            >
                                Lorem Ipsum
                            </LinkButton>

                            <Button color="text">Lorem</Button>
                        </RichTooltipActions>
                    </RichTooltip>
                </Popover>
            </DialogTrigger>
        </div>
    );
};

const ButtonPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];
    const shapes: ButtonShape[] = ["round", "square"];

    const buttonColor: ButtonColor[] = [
        "filled",
        "tonal",
        "outlined",
        "text",
        "elevated",
    ];

    return (
        <>
            {buttonColor.map((color) => (
                <div className="button-color" key={`button-${color}`}>
                    <h3 className={typography.headlineMediumEmphasized}>
                        {color}
                    </h3>

                    {sizes.map((size) => (
                        <div className="button-size" key={size}>
                            <h4 className={typography.headlineSmall}>{size}</h4>

                            {shapes.map((shape) => (
                                <div className="items" key={shape}>
                                    <Button
                                        size={size}
                                        shape={shape}
                                        color={color}
                                    >
                                        click me
                                    </Button>

                                    <Button
                                        size={size}
                                        shape={shape}
                                        color={color}
                                        icon={Mouse}
                                    >
                                        click me
                                    </Button>

                                    <Button
                                        size={size}
                                        shape={shape}
                                        color={color}
                                        isPending
                                    >
                                        click me
                                    </Button>

                                    <Button
                                        size={size}
                                        shape={shape}
                                        color={color}
                                        isDisabled
                                    >
                                        click me
                                    </Button>

                                    {color !== "text" && (
                                        <ToggleButton
                                            size={size}
                                            shape={shape}
                                            color={color}
                                        >
                                            click me
                                        </ToggleButton>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

const IconButtonPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];
    const shapes: ButtonShape[] = ["round", "square"];

    const iconButtonWidth: IconButtonWidth[] = ["narrow", "default", "wide"];
    const iconButtonColor: IconButtonColor[] = [
        "filled",
        "tonal",
        "outlined",
        "standard",
    ];

    return (
        <>
            {iconButtonColor.map((color) => (
                <div key={`icon-button-${color}`} className="button-color">
                    <h3 className={typography.headlineMedium}>{color}</h3>

                    {sizes.map((size) => (
                        <div className="button-size" key={size}>
                            <h4 className={typography.headlineSmall}>{size}</h4>

                            {iconButtonWidth.map((width) => (
                                <Fragment key={width}>
                                    <h5
                                        className={
                                            typography.titleMediumEmphasized
                                        }
                                    >
                                        {width}
                                    </h5>
                                    {shapes.map((shape) => (
                                        <div key={shape} className="items">
                                            <IconButton
                                                size={size}
                                                shape={shape}
                                                color={color}
                                                icon={Mouse}
                                                width={width}
                                            />

                                            <IconButton
                                                size={size}
                                                shape={shape}
                                                color={color}
                                                icon={Mouse}
                                                width={width}
                                                isPending
                                            />

                                            <IconButton
                                                size={size}
                                                shape={shape}
                                                color={color}
                                                icon={Mouse}
                                                width={width}
                                                isDisabled
                                            />

                                            <ToggleIconButton
                                                size={size}
                                                shape={shape}
                                                color={color}
                                                icon={Mouse}
                                                width={width}
                                                selectedIcon={MouseOff}
                                            />
                                        </div>
                                    ))}
                                </Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

const LinkPreview = () => {
    return (
        <div className="items">
            <LinkButton
                href="https://m3.material.io"
                target="_blank"
                color="elevated"
            >
                Material 3
            </LinkButton>

            <LinkIconButton
                href="https://m3.material.io"
                target="_blank"
                icon={ExternalLinkIcon}
                color="standard"
            />
        </div>
    );
};

const MenuPreview = () => {
    type MenuCombo = {
        title: string;
        menu: MenuNode[];
    };

    type MenuNode = MenuItemNode | MenuSectionNode | MenuDividerNode;

    type MenuDividerNode = {
        type: "divider";
        id: string;
    };

    type MenuItemNode = {
        type: "item";

        id: string;
        label: string;
        leadingIcon?: LucideIcon;
        trailingIcon?: LucideIcon;
        supportingText?: string;
        trailingText?: React.ReactNode;

        submenu?: MenuNode[]; // recursion
    };

    type MenuSectionNode = {
        type: "section";

        id: string;

        items: (MenuItemNode | MenuDividerNode)[];
    };

    type MenuComboList = MenuCombo[];

    const menuCombo: MenuComboList = [
        {
            title: "Only items",
            menu: [
                {
                    type: "item",
                    id: "0-0",
                    label: "Profile",
                    trailingIcon: User,
                },
                {
                    type: "item",
                    id: "0-1",
                    label: "Settings",
                    trailingIcon: Settings,
                },
                {
                    type: "item",
                    id: "0-2",
                    label: "Logout",
                    trailingIcon: LogOut,
                },
            ],
        },

        {
            title: "Only sections",
            menu: [
                {
                    type: "section",
                    id: "1-0",
                    items: [
                        { type: "item", id: "1-0-0", label: "Profile" },
                        { type: "item", id: "1-0-2", label: "Security" },
                    ],
                },
                {
                    type: "section",
                    id: "1-1",
                    items: [
                        { type: "item", id: "1-1-0", label: "Theme" },
                        { type: "item", id: "1-1-1", label: "Language" },
                    ],
                },
            ],
        },

        {
            title: "Items + section",
            menu: [
                { type: "item", id: "2-0", label: "Home" },
                {
                    type: "section",
                    id: "2-1",
                    items: [
                        { type: "item", id: "2-1-0", label: "Profile" },
                        { type: "item", id: "2-1-1", label: "Settings" },
                    ],
                },
            ],
        },

        {
            title: "Section + item",
            menu: [
                {
                    type: "section",
                    id: "3-0",
                    items: [
                        { type: "item", id: "3-0-0", label: "Profile" },
                        { type: "item", id: "3-0-1", label: "Settings" },
                    ],
                },
                { type: "item", id: "3-1", label: "Logout" },
            ],
        },

        {
            title: "Mixed",
            menu: [
                { type: "item", id: "4-0", label: "Home" },
                {
                    type: "section",
                    id: "4-1",
                    items: [{ type: "item", id: "4-1-0", label: "Profile" }],
                },
                { type: "item", id: "4-2", label: "Notifications" },
                {
                    type: "section",
                    id: "4-3",
                    items: [{ type: "item", id: "4-3-0", label: "Privacy" }],
                },
            ],
        },

        {
            title: "Section (no header)",
            menu: [
                {
                    type: "section",
                    id: "5-0",
                    items: [
                        { type: "item", id: "5-0-0", label: "Option 1" },
                        { type: "item", id: "5-0-1", label: "Option 2" },
                    ],
                },
            ],
        },

        {
            title: "Item variants",
            menu: [
                { type: "item", id: "6-0", label: "Basic" },
                {
                    type: "item",
                    id: "6-1",
                    label: "With leading icon",
                    leadingIcon: Clipboard,
                },
                {
                    type: "item",
                    id: "6-2",
                    label: "With supporting text",
                    supportingText: "Extra info",
                },
                {
                    type: "item",
                    id: "6-3",
                    label: "With trailing text",
                    trailingText: "⌘K",
                },
                {
                    type: "item",
                    id: "6-4",
                    label: "Full",
                    leadingIcon: Clipboard,
                    supportingText: "Details",
                    trailingText: "Ctrl+S",
                },
            ],
        },

        {
            title: "Submenu (items)",
            menu: [
                {
                    type: "item",
                    id: "7-0",
                    label: "File",
                    submenu: [
                        { type: "item", id: "7-0-0", label: "New" },
                        { type: "item", id: "7-0-1", label: "Open" },
                    ],
                },
            ],
        },

        {
            title: "Submenu (sections)",
            menu: [
                {
                    type: "item",
                    id: "8-0",
                    label: "Edit",
                    submenu: [
                        {
                            type: "section",
                            id: "8-0-0",
                            items: [
                                { type: "item", id: "8-0-0-0", label: "Copy" },
                                { type: "item", id: "8-0-0-1", label: "Paste" },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            title: "Nested submenu",
            menu: [
                {
                    type: "item",
                    id: "9-0",
                    label: "More",
                    submenu: [
                        {
                            type: "item",
                            id: "9-0-0",
                            label: "Advanced",
                            submenu: [
                                {
                                    type: "section",
                                    id: "9-0-0-0",
                                    items: [
                                        {
                                            type: "item",
                                            id: "9-0-0-0-0",
                                            label: "Logs",
                                        },
                                        {
                                            type: "item",
                                            id: "9-0-0-0-1",
                                            label: "Debug",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            title: "Mixed + nested",
            menu: [
                { type: "item", id: "10-0", label: "Home" },
                {
                    type: "item",
                    id: "10-1",
                    label: "File",
                    submenu: [
                        { type: "item", id: "10-1-0", label: "New" },
                        {
                            type: "section",
                            id: "10-1-1",
                            items: [
                                {
                                    type: "item",
                                    id: "10-1-1-0",
                                    label: "file1.txt",
                                },
                                {
                                    type: "item",
                                    id: "10-1-1-1",
                                    label: "file2.txt",
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "section",
                    id: "10-2",
                    items: [
                        { type: "item", id: "10-2-0", label: "Profile" },
                        {
                            type: "item",
                            id: "10-2-1",
                            label: "Settings",
                            submenu: [
                                {
                                    type: "item",
                                    id: "10-2-1-0",
                                    label: "Theme",
                                },
                                {
                                    type: "item",
                                    id: "10-2-1-1",
                                    label: "Privacy",
                                },
                            ],
                        },
                    ],
                },
                { type: "item", id: "10-3", label: "Logout" },
            ],
        },
    ];

    const prob = (p = 0.5) => Math.random() < p;

    const layout = () => (prob() ? "standard" : "grouped");
    const color = () => (prob() ? "standard" : "vibrant");

    const randomButtonColor = (): ButtonColor => {
        const colors: ButtonColor[] = [
            "filled",
            "tonal",
            "outlined",
            "elevated",
            "text",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const renderMenuItem = (item: MenuItemNode) => {
        return (
            <MenuItem
                leadingIcon={item.leadingIcon}
                supportingText={item.supportingText}
                trailingText={
                    item.trailingText && (
                        <MenuShortcut>{item.trailingText}</MenuShortcut>
                    )
                }
                trailingIcon={item.trailingIcon}
                label={item.label}
            />
        );
    };

    const renderMenu = (item: MenuNode) => {
        if (item.type === "section") {
            return (
                <MenuSection items={item.items} selectionMode="multiple">
                    {(item) => renderMenu(item)}
                </MenuSection>
            );
        }

        if (item.type === "divider") return <Divider />;

        if (item.submenu) {
            return (
                <SubmenuTrigger>
                    {renderMenuItem(item)}

                    <SubmenuPopover>
                        <Menu items={item.submenu} selectionMode="multiple">
                            {(item) => renderMenu(item)}
                        </Menu>
                    </SubmenuPopover>
                </SubmenuTrigger>
            );
        }

        return renderMenuItem(item);
    };

    return (
        <div className="items">
            {menuCombo.map((combo) => {
                const menuLayout = layout();
                const menuColor = color();

                const triggerColor = randomButtonColor();

                return (
                    <MenuTrigger
                        key={combo.title}
                        layout={menuLayout}
                        color={menuColor}
                    >
                        <Button
                            color={triggerColor}
                            tooltip={`layout: ${menuLayout}, color: ${menuColor}`}
                        >
                            {combo.title}
                        </Button>

                        <MenuPopover>
                            <Menu items={combo.menu} selectionMode="multiple">
                                {(item) => {
                                    return renderMenu(item);
                                }}
                            </Menu>
                        </MenuPopover>
                    </MenuTrigger>
                );
            })}
        </div>
    );
};

const SplitButtonPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const colors: SplitButtonColor[] = [
        "filled",
        "tonal",
        "outlined",
        "elevated",
    ];

    const RenderSplitButton = ({
        size,
        color,
        isDisabled,
        isPending,
        label = true,
    }: {
        size: ButtonSize;
        color: SplitButtonColor;
        isPending?: boolean;
        isDisabled?: boolean;
        label?: boolean;
    }) => {
        return (
            <SplitButton
                color={color}
                size={size}
                isDisabled={isDisabled}
                isPending={isPending}
            >
                <SplitButtonPrimary tooltip="download" icon={Download}>
                    {label && "Download"}
                </SplitButtonPrimary>

                <MenuTrigger
                    color={!label ? "standard" : "vibrant"}
                    layout={!label ? "standard" : "grouped"}
                >
                    <SplitButtonTrigger tooltip="more actions" />
                    <Popover>
                        <Menu>
                            <MenuSection>
                                <MenuSectionHeader>
                                    Quick Actions
                                </MenuSectionHeader>

                                <MenuItem trailingIcon={Eye} label="Preview" />

                                <MenuItem trailingIcon={Share2} label="Share" />
                            </MenuSection>

                            {!label && <Divider />}

                            <MenuSection>
                                <MenuSectionHeader>Security</MenuSectionHeader>

                                <MenuItem
                                    trailingIcon={GlobeLock}
                                    supportingText="Make item private"
                                    label="Private"
                                />

                                <SubmenuTrigger>
                                    <MenuItem
                                        trailingIcon={GlobeLock}
                                        supportingText="Make item private"
                                        label="More"
                                    />

                                    <SubmenuPopover>
                                        <Menu>
                                            <MenuSection>
                                                <MenuItem label="Lock" />

                                                <MenuItem label="Archive" />
                                            </MenuSection>
                                        </Menu>
                                    </SubmenuPopover>
                                </SubmenuTrigger>
                            </MenuSection>
                        </Menu>
                    </Popover>
                </MenuTrigger>
            </SplitButton>
        );
    };

    return (
        <>
            {colors.map((color) => (
                <div className="button-color" key={`button-${color}`}>
                    <h3 className={typography.headlineMediumEmphasized}>
                        {color}
                    </h3>

                    {sizes.map((size) => (
                        <div className="button-size" key={size}>
                            <h4 className={typography.headlineSmall}>{size}</h4>

                            <div className="items">
                                <RenderSplitButton size={size} color={color} />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    isPending
                                />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    isDisabled
                                />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    label={false}
                                />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    label={false}
                                    isPending
                                />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    label={false}
                                    isDisabled
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

const ButtonGroupPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const shapes: ButtonShape[] = ["round", "square"];

    const colors: CoreButtonColor[] = ["outlined", "tonal", "filled"];

    return (
        <>
            {colors.map((color) => (
                <Fragment key={color}>
                    {shapes.map((shape) => (
                        <Fragment key={shape}>
                            <h3
                                className={typography.titleLargeEmphasized}
                                style={{
                                    textAlign: "center",
                                }}
                            >{`${color}-${shape}`}</h3>

                            {sizes.map((size) => (
                                <Fragment key={size}>
                                    <div className="items">
                                        <ButtonGroup
                                            size={size}
                                            color={color}
                                            shape={shape}
                                        >
                                            <ToggleButton id={"one"}>
                                                One
                                            </ToggleButton>

                                            <ToggleButton id={"two"}>
                                                Two
                                            </ToggleButton>

                                            <ToggleButton
                                                id={"three"}
                                                icon={Armchair}
                                            >
                                                Three
                                            </ToggleButton>

                                            <ToggleIconButton
                                                id={"four"}
                                                icon={Sofa}
                                            />

                                            <ToggleButton id={"five"}>
                                                Five
                                            </ToggleButton>
                                        </ButtonGroup>
                                    </div>
                                </Fragment>
                            ))}

                            <Divider
                                style={
                                    {
                                        "--md-divider-color":
                                            "var(--md-sys-color-primary)",
                                    } as CSSProperties
                                }
                            />
                        </Fragment>
                    ))}
                </Fragment>
            ))}
        </>
    );
};

const ConnectedButtonGroupPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const shapes: ButtonShape[] = ["round", "square"];

    const buttonColor: ConnectedButtonGroupColor[] = [
        "filled",
        "tonal",
        "outlined",
        "elevated",
    ];

    return (
        <>
            {buttonColor.map((color) => (
                <div className="button-color" key={`button-${color}`}>
                    <h3 className={typography.headlineMediumEmphasized}>
                        {color}
                    </h3>

                    {sizes.map((size) => (
                        <div className="button-size" key={size}>
                            <h4 className={typography.headlineSmall}>{size}</h4>

                            {shapes.map((shape) => (
                                <div className="items" key={shape}>
                                    <ConnectedButtonGroup
                                        size={size}
                                        shape={shape}
                                        color={color}
                                    >
                                        <ConnectedButton id="1" icon={Sun}>
                                            Sun
                                        </ConnectedButton>

                                        <ConnectedButton id="2" icon={SunMoon}>
                                            Sun Moon
                                        </ConnectedButton>

                                        <ConnectedButton
                                            id="3"
                                            icon={SunSnow}
                                            isDisabled
                                        >
                                            Sun Snow
                                        </ConnectedButton>

                                        <ConnectedButton id="4" icon={CloudSun}>
                                            Cloud Sun
                                        </ConnectedButton>

                                        <ConnectedButton
                                            id="5"
                                            icon={CloudSnow}
                                        />
                                    </ConnectedButtonGroup>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

const DialogPreview = () => {
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
                                    slot="close"
                                    key="Squirrel"
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

const InputPreview = () => {
    const RenderInput = ({
        isInvalid,
        isDisabled,
    }: {
        isInvalid?: boolean;
        isDisabled?: boolean;
    }) => {
        const [val, setVal] = useState("");
        return (
            <Input
                label="Email"
                type="text"
                description="Enter your Adgytec work email"
                placeholder="username"
                suffix={"@adgytec.in"}
                // editorDir="rtl"
                leadingIcon={Mail}
                trailing={
                    <InputButton
                        icon={Armchair}
                        onPress={() => setVal("hello")}
                    />
                }
                showCharacterCount
                value={val}
                onChange={setVal}
                maxLength={64}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
                showDescriptionOnInvalid={isInvalid}
            />
        );
    };

    return (
        <div className="items">
            <RenderInput />

            <RenderInput isInvalid />

            <RenderInput isDisabled />

            <RenderInput isInvalid isDisabled />
        </div>
    );
};

const TextAreaPreview = () => {
    const RenderTextArea = ({
        isInvalid,
        isDisabled,
    }: {
        isInvalid?: boolean;
        isDisabled?: boolean;
    }) => {
        return (
            <TextArea
                label="Issue"
                maxLength={1024}
                rows={4}
                description="Describe your issue"
                showCharacterCount
                isInvalid={isInvalid}
                showDescriptionOnInvalid={isInvalid}
                isDisabled={isDisabled}
                placeholder="Define you issue..."
            />
        );
    };

    return (
        <div className="items-grid">
            <RenderTextArea />

            <RenderTextArea isInvalid />

            <RenderTextArea isDisabled />

            <RenderTextArea isInvalid isDisabled />
        </div>
    );
};

const TimeFieldPreview = () => {
    const RenderTimeField = ({
        isInvalid,
        isDisabled,
    }: {
        isInvalid?: boolean;
        isDisabled?: boolean;
    }) => {
        return (
            <TimeField
                label="Appointment Time"
                description="Add your appointment time"
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                showDescriptionOnInvalid={isInvalid}
                granularity="second"
            />
        );
    };

    return (
        <div className="items">
            <RenderTimeField />

            <RenderTimeField isInvalid />

            <RenderTimeField isDisabled />

            <RenderTimeField isInvalid isDisabled />
        </div>
    );
};

const DateFieldPreview = () => {
    const RenderDateField = ({
        isInvalid,
        isDisabled,
    }: {
        isInvalid?: boolean;
        isDisabled?: boolean;
    }) => {
        return (
            <DateField
                label="Appointment Date"
                description="Add your appointment date"
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                showDescriptionOnInvalid={isInvalid}
                granularity="second"
            />
        );
    };

    return (
        <div className="items">
            <RenderDateField />

            <RenderDateField isInvalid />

            <RenderDateField isDisabled />

            <RenderDateField isInvalid isDisabled />
        </div>
    );
};

export const SelectPreview = () => {
    return (
        <div className="items">
            <Select
                label="Icecream"
                description="Flavors of icecream"
                placeholder="Select Icecream"
                isInvalid
                showDescriptionOnInvalid
            >
                <SelectTrigger />

                <SelectPopover>
                    <SelectList>
                        <SelectItem label="Strawberry" />

                        <SelectItem label="Mango" />

                        <Divider />

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </SelectPopover>
            </Select>

            <Select
                label="Icecream"
                description="Flavors of icecream"
                placeholder="Select Icecream"
                selectionMode="multiple"
            >
                <SelectTrigger />

                <SelectPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <Divider />

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </SelectPopover>
            </Select>

            <Select
                label="Icecream"
                description="Flavors of icecream"
                placeholder="Select Icecream"
                selectionMode="multiple"
                isDisabled
            >
                <SelectTrigger />

                <SelectPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <Divider />

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </SelectPopover>
            </Select>

            <ComboBox label="Icecream" description="Flavors of icecream">
                <ComboBoxTrigger placeholder="Select Icecream" />

                <ComboBoxPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </ComboBoxPopover>
            </ComboBox>

            <ComboBox
                label="Icecream"
                description="Flavors of icecream"
                selectionMode="multiple"
                isInvalid
                showDescriptionOnInvalid
            >
                <ComboBoxTrigger placeholder="Select Icecream" />

                <ComboBoxPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </ComboBoxPopover>
            </ComboBox>

            <ComboBox
                label="Icecream"
                description="Flavors of icecream"
                isDisabled
            >
                <ComboBoxTrigger placeholder="Select Icecream" />

                <ComboBoxPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </ComboBoxPopover>
            </ComboBox>
        </div>
    );
};

const DisclosurePreview = () => {
    return (
        <>
            <Disclosure>
                <DisclosureHeader>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </DisclosureHeader>

                <DisclosurePanel>
                    Morbi eget arcu non sapien semper imperdiet. Pellentesque
                    tristique, quam et ullamcorper sagittis, mi massa ultricies
                    ligula, quis malesuada sem nunc sit amet orci. Nulla
                    interdum lacus sit amet tortor pretium vulputate. Sed a
                    tellus lacus. Nullam tempus consequat ex ultricies
                    fringilla. Sed nunc lectus, scelerisque sit amet tristique
                    eu, consequat sed quam. Aliquam et odio placerat,
                    pellentesque purus et, maximus dui. Cras id accumsan est, ac
                    euismod tellus. Proin non mattis justo. Donec ornare dui a
                    turpis placerat ullamcorper. Phasellus aliquet, mauris eget
                    sagittis cursus, orci justo ullamcorper ante, a viverra
                    risus leo ac neque. Integer tincidunt sapien vitae elit
                    rutrum cursus. In eleifend ultricies nisl, ut pretium ipsum
                    vulputate sit amet. Nulla viverra nulla nisi, tincidunt
                    varius leo interdum quis.
                </DisclosurePanel>
            </Disclosure>

            <Disclosure isDisabled>
                <DisclosureHeader>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </DisclosureHeader>

                <DisclosurePanel>
                    Nulla viverra nulla nisi, tincidunt varius leo interdum
                    quis.
                </DisclosurePanel>
            </Disclosure>

            <h3 className={typography.headlineSmallEmphasized}>
                Disclosure Group
            </h3>

            <DisclosureGroup>
                <Disclosure>
                    <DisclosureHeader>Personal Information</DisclosureHeader>
                    <DisclosurePanel>
                        Personal information form here.
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure>
                    <DisclosureHeader>Billing Address</DisclosureHeader>
                    <DisclosurePanel>
                        Billing address form here.
                    </DisclosurePanel>
                </Disclosure>
            </DisclosureGroup>
        </>
    );
};

const ToolbarPreview = () => {
    type Orientation = "horizontal" | "vertical";

    const RenderToolbar = ({
        color,
        variant,
        orientation = "horizontal",
        isDisabled,
    }: {
        color?: ToolbarColor;
        variant?: ToolbarVariant;
        orientation?: Orientation;
        isDisabled?: boolean;
    }) => {
        return (
            <>
                <div className={"items"} data-toolbar={true}>
                    <Toolbar
                        color={color}
                        variant={variant}
                        orientation={orientation}
                    >
                        <IconButton
                            icon={Armchair}
                            isDisabled={isDisabled}
                            color="outlined"
                        />

                        <IconButton icon={Armchair} isDisabled={isDisabled} />

                        <IconButton
                            icon={Armchair}
                            color="standard"
                            isDisabled={isDisabled}
                        />

                        <IconButton
                            icon={Armchair}
                            color="tonal"
                            isDisabled={isDisabled}
                        />
                    </Toolbar>

                    <Toolbar
                        color={color}
                        variant={variant}
                        orientation={orientation}
                    >
                        <ToggleIconButton
                            icon={Globe}
                            isDisabled={isDisabled}
                            selectedIcon={GlobeOff}
                        />

                        <ToggleIconButton
                            icon={Globe}
                            selectedIcon={GlobeOff}
                            color="outlined"
                            isDisabled={isDisabled}
                        />

                        <ToggleIconButton
                            icon={Globe}
                            selectedIcon={GlobeOff}
                            color="standard"
                            isDisabled={isDisabled}
                        />

                        <ToggleIconButton
                            icon={Globe}
                            selectedIcon={GlobeOff}
                            color="tonal"
                            isDisabled={isDisabled}
                        />
                    </Toolbar>

                    <Toolbar
                        color={color}
                        variant={variant}
                        orientation={orientation}
                    >
                        <ToolbarToggleButtonGroup>
                            <ToggleIconButton
                                id={1}
                                icon={Globe}
                                isDisabled={isDisabled}
                                selectedIcon={GlobeOff}
                            />

                            <ToggleIconButton
                                id={2}
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                color="outlined"
                                isDisabled={isDisabled}
                            />

                            <ToggleIconButton
                                id={3}
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                color="standard"
                                isDisabled={isDisabled}
                            />

                            <ToggleIconButton
                                id={4}
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                color="tonal"
                                isDisabled={isDisabled}
                            />
                        </ToolbarToggleButtonGroup>

                        <Divider
                            orientation={
                                orientation === "vertical"
                                    ? "horizontal"
                                    : "vertical"
                            }
                        />

                        <ToolbarToggleButtonGroup>
                            <ToggleIconButton
                                id={1}
                                icon={Globe}
                                isDisabled={isDisabled}
                                selectedIcon={GlobeOff}
                            />

                            <ToggleIconButton
                                id={2}
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                color="outlined"
                                isDisabled={isDisabled}
                            />

                            <ToggleIconButton
                                id={3}
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                color="standard"
                                isDisabled={isDisabled}
                            />

                            <ToggleIconButton
                                id={4}
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                color="tonal"
                                isDisabled={isDisabled}
                            />
                        </ToolbarToggleButtonGroup>
                    </Toolbar>

                    {orientation === "horizontal" && (
                        <>
                            <Toolbar
                                color={color}
                                variant={variant}
                                orientation={orientation}
                                className="toolbar-overflow"
                            >
                                <Button
                                    icon={Armchair}
                                    color="outlined"
                                    isDisabled={isDisabled}
                                >
                                    Chair
                                </Button>
                                <Button
                                    icon={Armchair}
                                    color="text"
                                    isDisabled={isDisabled}
                                >
                                    Chair
                                </Button>

                                <Button icon={Armchair} isDisabled={isDisabled}>
                                    Chair
                                </Button>

                                <Button
                                    icon={Armchair}
                                    color="tonal"
                                    isDisabled={isDisabled}
                                >
                                    Chair
                                </Button>

                                <Button
                                    icon={Armchair}
                                    color="elevated"
                                    isDisabled={isDisabled}
                                >
                                    Chair
                                </Button>
                            </Toolbar>

                            <Toolbar
                                color={color}
                                variant={variant}
                                orientation={orientation}
                                className="toolbar-overflow"
                            >
                                <ToggleButton
                                    icon={Globe}
                                    selectedIcon={GlobeOff}
                                    isDisabled={isDisabled}
                                >
                                    Globe
                                </ToggleButton>

                                <ToggleButton
                                    icon={Globe}
                                    selectedIcon={GlobeOff}
                                    color="outlined"
                                    isDisabled={isDisabled}
                                >
                                    Globe
                                </ToggleButton>

                                <ToggleButton
                                    icon={Globe}
                                    selectedIcon={GlobeOff}
                                    color="tonal"
                                    isDisabled={isDisabled}
                                >
                                    Globe
                                </ToggleButton>

                                <ToggleButton
                                    icon={Globe}
                                    selectedIcon={GlobeOff}
                                    color="elevated"
                                    isDisabled={isDisabled}
                                >
                                    Globe
                                </ToggleButton>
                            </Toolbar>
                        </>
                    )}
                </div>

                <Divider />
            </>
        );
    };

    const orientation: Orientation[] = ["horizontal", "vertical"];

    return (
        <div className="items-grid">
            {orientation.map((o) => (
                <Fragment key={o}>
                    <RenderToolbar orientation={o} />
                    <RenderToolbar orientation={o} isDisabled />

                    <RenderToolbar variant="floating" orientation={o} />
                    <RenderToolbar
                        variant="floating"
                        orientation={o}
                        isDisabled
                    />

                    <RenderToolbar color="vibrant" orientation={o} />
                    <RenderToolbar color="vibrant" orientation={o} isDisabled />

                    <RenderToolbar
                        color="vibrant"
                        variant="floating"
                        orientation={o}
                    />
                    <RenderToolbar
                        color="vibrant"
                        variant="floating"
                        orientation={o}
                        isDisabled
                    />
                </Fragment>
            ))}
        </div>
    );
};

const TabsPreview = () => {
    const RenderTabs = ({
        isDisabled,
        orientation,
    }: {
        isDisabled?: boolean;
        orientation?: Orientation;
    }) => {
        return (
            <Tabs
                keyboardActivation="manual"
                orientation={orientation}
                style={{
                    padding: "var(--md-sys-layout-space-28)",
                    borderRadius: "var(--md-sys-shape-corner-radius-large)",
                    outline:
                        "var(--md-sys-shape-border-width-thin) solid var(--md-sys-color-outline)",
                }}
            >
                <TabList
                    aria-label="Settings"
                    style={{
                        scrollbarWidth: "none",
                    }}
                >
                    <Tab
                        id="general"
                        label="General"
                        icon={SwatchBook}
                        isDisabled={isDisabled}
                    />
                    <Tab
                        id="appearance"
                        label="Appearance"
                        isDisabled={isDisabled}
                    />
                    <Tab
                        id="notifications"
                        label="Notifications"
                        icon={Bell}
                        isDisabled={isDisabled}
                    />
                    <Tab
                        id="profile"
                        label="Profile"
                        icon={UserRound}
                        isDisabled={isDisabled}
                    />
                </TabList>
                <TabPanels>
                    <TabPanel id="general">
                        <Form
                            style={{
                                display: "grid",
                                gap: "1.5rem",
                            }}
                        >
                            <Input
                                label="Homepage"
                                defaultValue="react-aria.adobe.com"
                            />
                            <Checkbox containerStateLayer defaultSelected>
                                Show sidebar
                            </Checkbox>
                            <Checkbox containerStateLayer>
                                Show status bar
                            </Checkbox>
                        </Form>
                    </TabPanel>
                    <TabPanel id="appearance">
                        <Form
                            style={{
                                display: "grid",
                                gap: "1.5rem",
                            }}
                        >
                            <RadioGroup
                                containerStateLayer
                                label="Theme"
                                defaultValue="auto"
                            >
                                <Radio value="auto">Auto</Radio>
                                <Radio value="light">Light</Radio>
                                <Radio value="dark">Dark</Radio>
                            </RadioGroup>
                            <RadioGroup
                                containerStateLayer
                                label="Font size"
                                defaultValue="medium"
                            >
                                <Radio value="small">Small</Radio>
                                <Radio value="medium">Medium</Radio>
                                <Radio value="large">Large</Radio>
                            </RadioGroup>
                        </Form>
                    </TabPanel>
                    <TabPanel id="notifications">
                        <CheckboxGroup
                            containerStateLayer
                            label="Notifications settings"
                            defaultValue={["account", "dms"]}
                        >
                            <Checkbox value="account">
                                Account activity
                            </Checkbox>
                            <Checkbox value="mentions">Mentions</Checkbox>
                            <Checkbox value="dms">Direct message</Checkbox>
                            <Checkbox value="marketing">
                                Marketing emails
                            </Checkbox>
                        </CheckboxGroup>
                    </TabPanel>
                    <TabPanel id="profile">
                        <Form
                            style={{
                                display: "grid",
                                gap: "1.5rem",
                            }}
                        >
                            <Input label="Name" defaultValue="Devon Govett" />
                            <Input
                                label="Username"
                                defaultValue="@devongovett"
                            />
                            <Button>Update profile</Button>
                        </Form>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        );
    };
    return (
        <div className="items">
            <RenderTabs />

            <RenderTabs orientation="vertical" />

            <RenderTabs isDisabled />

            <RenderTabs isDisabled orientation="vertical" />
        </div>
    );
};
const TagsPreview = () => {
    const items = [
        { id: 1, label: "News", icon: Newspaper },
        { id: 2, label: "Travel", icon: PlaneTakeoff },
        { id: 3, label: "Gaming", icon: Gamepad },
        { id: 4, label: "Shopping", icon: ShoppingCart },
    ];

    const itemKeys = items.map((item) => item.id);

    const list1 = useListData({
        initialItems: items,
    });

    const list2 = useListData({
        initialItems: items,
    });

    return (
        <div
            className="items-grid"
            style={{
                justifyItems: "center",
            }}
        >
            <Button
                color="tonal"
                onPress={() => {
                    list1.remove(...itemKeys);
                    list2.remove(...itemKeys);

                    list1.append(...items);
                    list2.append(...items);
                }}
            >
                reset lists
            </Button>

            <TagGroup
                aria-label="Demo"
                selectionMode="multiple"
                disabledKeys={["Travel"]}
                shouldSelectOnPressUp
            >
                <TagList items={items} className="tag-list">
                    {(item) => (
                        <Tag
                            id={item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    )}
                </TagList>
            </TagGroup>

            <TagGroup onAction={(key) => alert(key)} aria-label="Demo">
                <TagList items={items} className="tag-list">
                    {(item) => (
                        <Tag
                            id={item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    )}
                </TagList>
            </TagGroup>

            <TagGroup
                onRemove={(keys) => list1.remove(...keys)}
                aria-label="Demo"
            >
                <TagList
                    className="tag-list"
                    items={list1.items}
                    renderEmptyState={() => <div>No categories</div>}
                >
                    {(item) => <Tag label={item.label} icon={item.icon} />}
                </TagList>
            </TagGroup>

            <TagGroup
                aria-label="Demo"
                selectionMode="multiple"
                onRemove={(keys) => list2.remove(...keys)}
            >
                <TagList
                    className="tag-list"
                    items={list2.items}
                    renderEmptyState={() => <div>No categories</div>}
                >
                    {(item) => <Tag label={item.label} icon={item.icon} />}
                </TagList>
            </TagGroup>

            <TagGroup aria-label="Demo">
                <TagList className="tag-list">
                    <Tag
                        label="avatar"
                        avatar={<div className="avatar">R</div>}
                    />

                    <Tag
                        label="avatar overflow"
                        avatar={<div className="avatar">RRRRRRRRRRRR</div>}
                    />
                </TagList>
            </TagGroup>

            <TagGroup disabledKeys={["avatar"]} aria-label="Demo">
                <TagList className="tag-list">
                    <Tag
                        id="avatar"
                        label="avatar"
                        avatar={<div className="avatar">R</div>}
                    />

                    <Tag
                        label="avatar overflow"
                        avatar={<div className="avatar">RRRRRRRRRRRR</div>}
                    />
                </TagList>
            </TagGroup>
        </div>
    );
};

const RangeSliderPreview = () => {
    const sizes: SliderSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const orientation: Orientation[] = ["horizontal", "vertical"];

    return (
        <div className="items-grid">
            {orientation.map((o) => {
                return (
                    <div
                        key={o}
                        className={clsx("items")}
                        style={{
                            justifyContent: "center",
                        }}
                        data-slider-orientation={o}
                    >
                        {sizes.map((size) => (
                            <Fragment key={size}>
                                <div>
                                    <RangeSlider
                                        label={`${o}--${size}`}
                                        orientation={o}
                                        size={size}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                    />
                                </div>

                                <div>
                                    <RangeSlider
                                        label={`${o}--${size}--steps`}
                                        orientation={o}
                                        size={size}
                                        step={10}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "INR",
                                        }}
                                    />
                                </div>

                                <div>
                                    <RangeSlider
                                        label={`${o}--${size}--disabled`}
                                        isDisabled
                                        orientation={o}
                                        step={5}
                                        size={size}
                                        defaultValue={[30, 50]}
                                    />
                                </div>
                            </Fragment>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

const SliderPreview = () => {
    const sizes: SliderSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const orientation: Orientation[] = ["horizontal", "vertical"];

    return (
        <div className="items-grid">
            {orientation.map((o) => {
                return (
                    <div
                        key={o}
                        className={clsx("items")}
                        style={{
                            justifyContent: "center",
                        }}
                        data-slider-orientation={o}
                    >
                        {sizes.map((size) => (
                            <Fragment key={size}>
                                <div>
                                    <Slider
                                        label={`${o}--${size}`}
                                        orientation={o}
                                        size={size}
                                        insetIcon={DollarSign}
                                        minInsetIcon={HandCoins}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}--custom-output`}
                                        orientation={o}
                                        size={size}
                                        insetIcon={DollarSign}
                                        minInsetIcon={HandCoins}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                        outputRenderer={({ thumbIndex }) => (
                                            <SliderOutput>
                                                {({ state }) => {
                                                    const value =
                                                        state.getThumbPercent(
                                                            thumbIndex
                                                        );

                                                    if (value < 0.5) {
                                                        return "less";
                                                    }

                                                    if (value > 0.5) {
                                                        return "more";
                                                    }

                                                    return "half";
                                                }}
                                            </SliderOutput>
                                        )}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}`}
                                        orientation={o}
                                        size={size}
                                        insetIcon={DollarSign}
                                        minInsetIcon={HandCoins}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}--steps`}
                                        orientation={o}
                                        size={size}
                                        minValue={0}
                                        maxValue={1}
                                        step={0.04}
                                        maxStops={25}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "INR",
                                        }}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}--steps--not-aligned`}
                                        orientation={o}
                                        size={size}
                                        minValue={0}
                                        maxValue={10}
                                        step={3}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "INR",
                                        }}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}--disabled`}
                                        step={5}
                                        defaultValue={33}
                                        isDisabled
                                        orientation={o}
                                        size={size}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                    />
                                </div>
                            </Fragment>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

const CenteredSliderPreview = () => {
    const sizes: SliderSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const orientation: Orientation[] = ["horizontal", "vertical"];

    return (
        <div className="items-grid">
            {orientation.map((o) => {
                return (
                    <div
                        key={o}
                        className={clsx("items")}
                        style={{
                            justifyContent: "center",
                        }}
                        data-slider-orientation={o}
                    >
                        {sizes.map((size) => (
                            <Fragment key={size}>
                                <div>
                                    <CenteredSlider
                                        label={`${o}--${size}`}
                                        orientation={o}
                                        size={size}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                    />
                                </div>

                                <div>
                                    <CenteredSlider
                                        label={`${o}--${size}--steps-odd`}
                                        orientation={o}
                                        size={size}
                                        step={10}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "INR",
                                        }}
                                    />
                                </div>

                                <div>
                                    <CenteredSlider
                                        label={`${o}--${size}--steps-even`}
                                        orientation={o}
                                        size={size}
                                        step={11}
                                        maxValue={33}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "INR",
                                        }}
                                    />
                                </div>

                                <div>
                                    <CenteredSlider
                                        label={`${o}--${size}--disabled`}
                                        isDisabled
                                        orientation={o}
                                        step={5}
                                        size={size}
                                        defaultValue={35}
                                    />
                                </div>
                            </Fragment>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

const CalendarPreview = () => {
    return (
        <div className="items-grid" data-calendar>
            <div>
                <h3 className={typography.titleLargeEmphasized}>Standard</h3>

                <div className="items">
                    <Calendar />

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

const RangeCalendarPreview = () => {
    return (
        <div className="items-grid" data-calendar>
            <div>
                <h3 className={typography.titleLargeEmphasized}>Standard</h3>

                <div className="items">
                    select
                    <RangeCalendar commitBehavior="select" />
                    reset
                    <RangeCalendar commitBehavior="reset" />
                    clear
                    <RangeCalendar commitBehavior="clear" />
                    <RangeCalendar className="calendar-vibrant" />
                </div>
            </div>

            <div>
                <h3 className={typography.titleLargeEmphasized}>States</h3>

                <div className="items">
                    <RangeCalendar isDisabled />

                    <RangeCalendar isInvalid />

                    <RangeCalendar
                        isDateUnavailable={({ day }) => {
                            return day % 2 === 0;
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

const DatePickerPreview = () => {
    const minValue = new CalendarDate(1998, 12, 31);
    const maxValue = new CalendarDate(1999, 2, 1);
    return (
        <div className="items">
            <DatePicker
                label="Birthday"
                description="Add your birthday"
                minValue={minValue}
                maxValue={maxValue}
                weekdayStyle="short"
            />

            <DatePicker
                label="Birthday"
                description="Add your birthday"
                showDescriptionOnInvalid
                isInvalid
            />

            <DatePicker
                label="Birthday"
                description="Add your birthday"
                isDisabled
            />
        </div>
    );
};

const DateRangePickerPreview = () => {
    return (
        <div className="items">
            <DateRangePicker label="Dates" description="Select date range" />

            <DateRangePicker
                label="Dates"
                description="Select date range"
                showDescriptionOnInvalid
                isInvalid
            />

            <DateRangePicker
                label="Dates"
                description="Select date range"
                isDisabled
            />
        </div>
    );
};

const ConfigPreview = () => {
    return (
        <>
            <div className="items">
                <Button className="primary">primary</Button>
                <Button className="primary-container">primary container</Button>

                <Button className="error">error</Button>
                <Button className="error-container">error container</Button>

                <Button className="secondary">secondary</Button>
                <Button className="secondary-container">
                    secondary container
                </Button>

                <Button className="tertiary">tertiary</Button>
                <Button className="tertiary-container">
                    tertiary container
                </Button>

                <Button className="inverse">inverse</Button>
                <Button className="inverse-primary">inverse primary</Button>

                <Button className="primary-fixed">primary fixed</Button>
                <Button className="primary-fixed-dim">primary fixed dim</Button>

                <Button className="secondary-fixed">secondary fixed</Button>
                <Button className="secondary-fixed-dim">
                    secondary fixed dim
                </Button>

                <Button className="tertiary-fixed">tertiary fixed</Button>
                <Button className="tertiary-fixed-dim">
                    tertiary fixed dim
                </Button>
            </div>

            <div className="items" data-slider-orientation="horizontal">
                <Slider className="slider-tertiary" />

                <RangeSlider className="slider-primary-fixed" />

                <CenteredSlider className="slider-secondary-fixed" />

                <Slider className="slider-tertiary-fixed" />

                <RangeSlider className="slider-inverse" />
            </div>
        </>
    );
};

const App = () => {
    const [tabOrientation, setOrientation] = useLocalStorage<Orientation>(
        "tab-orientation",
        "horizontal"
    );

    type PreviewItem = {
        id: string;
        label: string;
        Component: React.ComponentType;
    };

    const previewItems: PreviewItem[] = [
        {
            id: "theme-selector",
            label: "Theme Selector",
            Component: ThemeSelectorPreview,
        },

        {
            id: "config-preview",
            label: "Config",
            Component: ConfigPreview,
        },

        {
            id: "range-date-picker",
            label: "Date Range Picker",
            Component: DateRangePickerPreview,
        },
        {
            id: "date-picker",
            label: "Date Picker",
            Component: DatePickerPreview,
        },
        {
            id: "range-calendar",
            label: "Range Calendar",
            Component: RangeCalendarPreview,
        },
        {
            id: "calendar",
            label: "Calendar",
            Component: CalendarPreview,
        },
        {
            id: "centered-slider",
            label: "Centered Slider",
            Component: CenteredSliderPreview,
        },
        {
            id: "range-slider",
            label: "Range Slider",
            Component: RangeSliderPreview,
        },
        { id: "slider", label: "Slider", Component: SliderPreview },
        { id: "tags", label: "Tags", Component: TagsPreview },
        { id: "tabs", label: "Tabs", Component: TabsPreview },
        { id: "toolbar", label: "Toolbar", Component: ToolbarPreview },
        { id: "disclosure", label: "Disclosure", Component: DisclosurePreview },
        { id: "select", label: "Select", Component: SelectPreview },
        { id: "date-field", label: "Date Field", Component: DateFieldPreview },
        { id: "time-field", label: "Time Field", Component: TimeFieldPreview },
        { id: "text-area", label: "Text Area", Component: TextAreaPreview },
        { id: "input", label: "Input", Component: InputPreview },
        { id: "dialog", label: "Dialog", Component: DialogPreview },
        {
            id: "connected-button-group",
            label: "Connected Button Group",
            Component: ConnectedButtonGroupPreview,
        },
        {
            id: "button-group",
            label: "Button Group",
            Component: ButtonGroupPreview,
        },
        {
            id: "split-button",
            label: "Split Button",
            Component: SplitButtonPreview,
        },
        { id: "menu", label: "Menu", Component: MenuPreview },
        { id: "link", label: "Link", Component: LinkPreview },
        { id: "button", label: "Button", Component: ButtonPreview },
        {
            id: "icon-button",
            label: "Icon Button",
            Component: IconButtonPreview,
        },
        { id: "tooltip", label: "Tooltip", Component: TooltipPreview },
        { id: "checkbox", label: "Checkbox", Component: CheckboxPreview },
        { id: "radio", label: "Radio", Component: RadioPreview },
        { id: "icon", label: "Icon", Component: IconPreview },
        { id: "switch", label: "Switch", Component: SwitchPreview },
    ];

    return (
        <div className="tab-container">
            <Tabs orientation={tabOrientation} className="tabs">
                <TabList
                    style={({ orientation }) => {
                        let pos = {};
                        if (orientation === "horizontal") {
                            pos = {
                                position: "sticky",
                                insetBlockStart: "0",
                                zIndex: "10",
                            };
                        }
                        return { scrollbarWidth: "none", ...pos };
                    }}
                >
                    <Tab id="orientation" label="Tab Orientation" />

                    <Collection items={previewItems}>
                        {(item) => <Tab id={item.id} label={item.label} />}
                    </Collection>
                </TabList>

                <TabPanels>
                    <TabPanel id="orientation">
                        <PreviewContainer label="Tab Orientation">
                            <div className="items">
                                <Button
                                    onPress={() =>
                                        setOrientation((prev) => {
                                            return prev === "horizontal"
                                                ? "vertical"
                                                : "horizontal";
                                        })
                                    }
                                    color="outlined"
                                >
                                    Change Orientation
                                </Button>
                            </div>
                        </PreviewContainer>
                    </TabPanel>

                    <Collection items={previewItems}>
                        {(item) => {
                            const Component = item.Component;

                            return (
                                <TabPanel id={item.id}>
                                    <PreviewContainer label={item.label}>
                                        <Component />
                                    </PreviewContainer>
                                </TabPanel>
                            );
                        }}
                    </Collection>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default App;
