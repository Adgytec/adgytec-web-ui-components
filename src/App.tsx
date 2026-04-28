import {
    Clipboard,
    Download,
    ExternalLinkIcon,
    Eye,
    FileBraces,
    GlobeLock,
    LogOut,
    type LucideIcon,
    Mouse,
    MouseOff,
    Settings,
    Share2,
    User,
} from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { Tooltip, TooltipTrigger } from "./components/Tooltip";
import "./styles/app.css";
import {
    Button,
    type ButtonColor,
    type ButtonShape,
    type ButtonSize,
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
import { Checkbox, CheckboxGroup } from "./components/Checkbox";
import { Icon } from "./components/Icon";
import { Input } from "./components/Input";
import {
    Menu,
    type MenuColor,
    MenuItem,
    type MenuLayout,
    MenuSection,
    MenuShortcut,
    MenuTrigger,
    SubmenuTrigger,
} from "./components/Menu";
import { Radio, RadioGroup } from "./components/Radio";
import { Separator } from "./components/Separator";
import { Switch } from "./components/Switch";
import { TextArea } from "./components/TextArea";
import { Viewport } from "./components/Viewport";
// import { ThemeSwitcher } from "./components/VisualSettings/ThemeSwitcher";
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
        <PreviewContainer label="Switch">
            <Switch isDisabled icon="none">
                hmm
            </Switch>

            <Switch isDisabled icon="both">
                hmm
            </Switch>

            <Switch isDisabled isSelected>
                hmm
            </Switch>

            <Switch>not-disabled</Switch>

            <Switch icon="both">not-disabled</Switch>

            <Switch icon="none">not-disabled</Switch>
        </PreviewContainer>
    );
};

const RadioPreview = () => {
    return (
        <PreviewContainer label="Radio">
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
            >
                <Radio value="cat">Cat</Radio>
                <Radio value="dog">Dog</Radio>
                <Radio value="dragon">Dragon</Radio>
            </RadioGroup>

            <RadioGroup
                label="Enabled"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia laoreet arcu, sit amet auctor ligula ultricies tincidunt. "
                orientation="horizontal"
            >
                <Radio value="cat">Cat</Radio>
                <Radio value="dog">Dog</Radio>
                <Radio value="dragon">Dragon</Radio>
            </RadioGroup>
        </PreviewContainer>
    );
};

const CheckboxPreview = () => {
    return (
        <PreviewContainer label="Checkbox">
            <Checkbox isDisabled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Checkbox>

            <Checkbox isDisabled isSelected>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Checkbox>

            <Checkbox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        </PreviewContainer>
    );
};

// const VisualSettingsPreview = () => {
//     return (
//         <PreviewContainer label="Theme Switcher">
//             <ThemeSwitcher ui={false} />
//             <ThemeSwitcher />
//         </PreviewContainer>
//     );
// };

const IconPreview = () => {
    return (
        <PreviewContainer label="Icon preview">
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
        </PreviewContainer>
    );
};

const TooltipPreview = () => {
    return (
        <PreviewContainer label="Tooltip">
            <div>
                <TooltipTrigger>
                    <Button>Tooltip demo</Button>

                    <Tooltip>Lorem ipsum dolor sit amet.</Tooltip>
                </TooltipTrigger>
            </div>
        </PreviewContainer>
    );
};

const TextfieldPreview = () => {
    return (
        <PreviewContainer label="Textfield">
            <Input
                label="input"
                placeholder="input"
                isDisabled
                description="trial description"
            />

            <TextArea
                label="textarea"
                rows={2}
                placeholder="textarea"
                isDisabled
                description="trial description"
            />

            <Input
                label="input"
                placeholder="input"
                description="trial description"
                isRequired
                type="email"
            />

            <TextArea
                label="textarea"
                rows={2}
                placeholder="textarea"
                description="trial description"
            />

            <Input
                label="input"
                placeholder="input"
                isInvalid
                description="trial description"
                errorMessage={"trial error"}
            />

            <TextArea
                label="textarea"
                rows={2}
                placeholder="textarea"
                isInvalid
                description="trial description"
                errorMessage={"trial error"}
            />
        </PreviewContainer>
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
        <PreviewContainer label="Button">
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
        </PreviewContainer>
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
        <PreviewContainer label="Icon Button">
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
        </PreviewContainer>
    );
};

const LinkPreview = () => {
    return (
        <PreviewContainer label="Link">
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
        </PreviewContainer>
    );
};

const MenuPreview = () => {
    type MenuCombo = {
        title: string;
        menu: MenuNode[];
    };

    type MenuNode = MenuItemNode | MenuSectionNode | MenuSeparatorNode;

    type MenuSeparatorNode = {
        type: "separator";
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

        items: (MenuItemNode | MenuSeparatorNode)[];
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
            >
                {item.label}
            </MenuItem>
        );
    };

    const renderMenu = (
        item: MenuNode,
        menuLayout: MenuLayout,
        menuColor: MenuColor
    ) => {
        if (item.type === "section") {
            return (
                <MenuSection items={item.items} selectionMode="multiple">
                    {(item) => renderMenu(item, menuLayout, menuColor)}
                </MenuSection>
            );
        }

        if (item.type === "separator") return <Separator />;

        if (item.submenu) {
            return (
                <SubmenuTrigger>
                    {renderMenuItem(item)}
                    <Menu
                        layout={menuLayout}
                        color={menuColor}
                        items={item.submenu}
                        selectionMode="multiple"
                    >
                        {(item) => renderMenu(item, menuLayout, menuColor)}
                    </Menu>
                </SubmenuTrigger>
            );
        }

        return renderMenuItem(item);
    };

    return (
        <PreviewContainer label="Menu (Layout + Color)">
            <div className="items">
                {menuCombo.map((combo) => {
                    const menuLayout = layout();
                    const menuColor = color();

                    const triggerColor = randomButtonColor();

                    return (
                        <MenuTrigger
                            key={combo.title}
                            offset={-1}
                            triggerElement={
                                <Button
                                    color={triggerColor}
                                    tooltip={`layout: ${menuLayout}, color: ${menuColor}`}
                                >
                                    {combo.title}
                                </Button>
                            }
                        >
                            <Menu
                                layout={menuLayout}
                                color={menuColor}
                                items={combo.menu}
                                selectionMode="multiple"
                            >
                                {(item) => {
                                    return renderMenu(
                                        item,
                                        menuLayout,
                                        menuColor
                                    );
                                }}
                            </Menu>
                        </MenuTrigger>
                    );
                })}
            </div>
        </PreviewContainer>
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
    }: {
        size: ButtonSize;
        color: SplitButtonColor;
        isPending?: boolean;
        isDisabled?: boolean;
    }) => {
        return (
            <SplitButton
                color={color}
                size={size}
                isDisabled={isDisabled}
                isPending={isPending}
            >
                <SplitButtonPrimary tooltip="download" icon={Download}>
                    Download
                </SplitButtonPrimary>

                <MenuTrigger
                    triggerElement={
                        <SplitButtonTrigger tooltip="more actions" />
                    }
                >
                    <Menu color="vibrant" layout="grouped">
                        <MenuSection>
                            <MenuItem trailingIcon={Eye}>Preview</MenuItem>

                            <MenuItem trailingIcon={Share2}>Share</MenuItem>
                        </MenuSection>

                        <MenuSection>
                            <MenuItem
                                trailingIcon={GlobeLock}
                                supportingText="Make item private"
                            >
                                Private
                            </MenuItem>
                        </MenuSection>
                    </Menu>
                </MenuTrigger>
            </SplitButton>
        );
    };

    return (
        <PreviewContainer label="SplitButton">
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
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </PreviewContainer>
    );
};

const App = () => {
    const previewElements = [
        // VisualSettingsPreview,
        SplitButtonPreview,
        MenuPreview,
        LinkPreview,
        ButtonPreview,
        IconButtonPreview,
        TextfieldPreview,
        TooltipPreview,
        CheckboxPreview,
        RadioPreview,
        IconPreview,
        SwitchPreview,
    ];

    return (
        <>
            <Viewport />
            <div className="preview-parent">
                {previewElements.map((Element) => {
                    return <Element key={Element.name} />;
                })}
            </div>
        </>
    );
};

export default App;
