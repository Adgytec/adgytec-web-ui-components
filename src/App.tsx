import { Copy, FileBraces } from "lucide-react";
import { Fragment, type ReactNode, useState } from "react";
import type { Key } from "react-aria-components";
import { Avatar } from "./components/Avatar/Avatar";
import type { AvatarSize } from "./components/Avatar/types";
import { Disclosure } from "./components/Disclosure/Disclosure/Disclosure";
import type { DisclosureProps } from "./components/Disclosure/Disclosure/types";
import { DisclosureGroup } from "./components/Disclosure/DisclousureGroup/DisclousreGroup";
import { Input } from "./components/Input/Input";
import { MenuButton } from "./components/Menu/MenuButton";
import { MenuLabel } from "./components/Menu/MenuLabel";
import { ModalAction } from "./components/Modal/ModalAction/ModalAction";
import { ModalBase } from "./components/Modal/ModalBase/ModalBase";
import { NavigationMenu } from "./components/Navigation/NavigationMenu/NavigationMenu";
import { NavigationResponsive } from "./components/Navigation/NavigationResponsive/NavigationResponsive";
import { NavigationSidebar } from "./components/Navigation/NavigationSidebar/NavigationSidebar";
import { Select } from "./components/Select/Select";
import type { SelectOptions } from "./components/Select/types";
import { Sidebar } from "./components/Sidebar/Sidebar";
import type { SidebarPosition, SidebarSize } from "./components/Sidebar/types";
import { TextArea } from "./components/TextArea/TextArea";
import { ToggleButtonGroup } from "./components/ToggleButtonGroup";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { Tree } from "./components/Tree/Tree";
import type {
    ColorTheme,
    HierarchyItemType,
    TreeHierarchyItemType,
} from "./utils/hierarchy";
import "./styles/app.css";
import { AvatarImage } from "./components/Avatar/AvatarImage";
import { Button } from "./components/Button";
import type { SolidCardBackground } from "./components/Card/BaseCard";
import { GradientCard } from "./components/Card/GradientCard";
import { SolidCard } from "./components/Card/SolidCard";
import { Checkbox, CheckboxGroup } from "./components/Checkbox";
import { Icon } from "./components/Icon";
import { Link, type Visual } from "./components/Link";
import { Radio, RadioGroup } from "./components/Radio";
import { Switch } from "./components/Switch";
import { toast } from "./components/Toast";
import { ToggleButton } from "./components/ToggleButton";
import { Viewport } from "./components/Viewport";
import { ComponentShapeSwitcher } from "./components/VisualSettings/ComponentShapeSwitcher";
import { ThemeSwitcher } from "./components/VisualSettings/ThemeSwitcher";
import type { ButtonVariant } from "./utils/button/types";

// preview container
const PreviewContainer = (props: { label: string; children: ReactNode }) => {
    return (
        <div className="preview-container">
            <Tooltip description="hello label">
                <h2>{props.label}</h2>
            </Tooltip>
            <div className="preview-container__items">{props.children}</div>
        </div>
    );
};

// button component preview
const ButtonPreview = () => {
    const buttonTheme: ColorTheme[] = [
        "primary",
        "primary-variant",
        "secondary",
        "tertiary",
        "error",
        "inverse-surface",
        "success",
    ];

    const buttonInfo: {
        variant: ButtonVariant;
        label: string;
        description: string;
    }[] = [
        {
            variant: "filled",
            label: "Filled Button",
            description: "This is filled button",
        },
        {
            variant: "outlined",
            label: "Outlined Button",
            description: "This is outlined button",
        },
        {
            variant: "text",
            label: "Text Button",
            description: "This is text button",
        },
    ];

    const avatarSrc =
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const onPress = () => {
        toast({
            dismissable: true,
            heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            prefixIcon: <Copy />,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate sollicitudin vulputate.",
        });
    };

    const descriptionAvatar = "This is a avatar button";

    return (
        <PreviewContainer label="Buttons">
            {buttonTheme.map((theme) => {
                return (
                    <div className="item-container" key={theme}>
                        {buttonInfo.map((info) => {
                            return (
                                <Fragment key={theme + info.label}>
                                    <Button
                                        onPress={onPress}
                                        theme={theme}
                                        description={info.description}
                                        variant={info.variant}
                                    >
                                        {info.label}
                                    </Button>

                                    <Button
                                        onPress={onPress}
                                        theme={theme}
                                        description={info.description}
                                        variant={info.variant}
                                        isDisabled
                                    >
                                        {info.label}
                                    </Button>

                                    {info.label === "Text Button" && (
                                        <Button
                                            onPress={onPress}
                                            theme={theme}
                                            description={
                                                "This button is shrinked"
                                            }
                                            shape="shrink"
                                            variant={info.variant}
                                        >
                                            {info.label}
                                        </Button>
                                    )}

                                    <Button
                                        theme={theme}
                                        onPress={onPress}
                                        shape="square"
                                        description="This is square button"
                                        variant={info.variant}
                                    >
                                        <Copy />
                                    </Button>

                                    <Button
                                        theme={theme}
                                        onPress={onPress}
                                        shape="avatar"
                                        description={descriptionAvatar}
                                        variant={info.variant}
                                    >
                                        <Avatar>
                                            <AvatarImage
                                                src={avatarSrc}
                                                alt="dog"
                                            />
                                        </Avatar>
                                    </Button>

                                    <Button
                                        theme={theme}
                                        onPress={onPress}
                                        shape="avatar"
                                        description={descriptionAvatar}
                                        variant={info.variant}
                                    >
                                        <Avatar
                                            theme={theme}
                                            background="inherit"
                                        >
                                            RV
                                        </Avatar>
                                    </Button>
                                </Fragment>
                            );
                        })}
                    </div>
                );
            })}
        </PreviewContainer>
    );
};

const LinkPreview = () => {
    const linkTheme: ColorTheme[] = [
        "primary",
        "primary-variant",
        "secondary",
        "tertiary",
        "error",
        "inverse-surface",
        "success",
    ];

    const linkElements = [
        {
            element: Link,
            label: "Normal Link",
            description: "This is regular link",
        },
        {
            element: Link,
            label: "Filled Button Link",
            description: "This is filled button link",
            visual: {
                type: "button",
                variant: "filled",
            } as Visual,
        },
        {
            element: Link,
            label: "Outlined Button Link",
            description: "This is outlined button link",
            visual: {
                type: "button",
                variant: "outlined",
            } as Visual,
        },
    ];

    return (
        <PreviewContainer label="Links">
            {linkTheme.map((theme) => {
                return (
                    <div className="item-container" key={theme}>
                        {linkElements.map((LinkElement) => {
                            return (
                                <Fragment key={theme + LinkElement.label}>
                                    <LinkElement.element
                                        href="/"
                                        theme={theme}
                                        description={LinkElement.description}
                                        visual={LinkElement.visual}
                                    >
                                        {LinkElement.label}
                                    </LinkElement.element>

                                    <LinkElement.element
                                        href="/"
                                        theme={theme}
                                        isDisabled
                                        description={LinkElement.description}
                                        visual={LinkElement.visual}
                                    >
                                        {LinkElement.label}
                                    </LinkElement.element>
                                </Fragment>
                            );
                        })}
                    </div>
                );
            })}
        </PreviewContainer>
    );
};

const SelectPreview = () => {
    const buttonVariants: ButtonVariant[] = ["filled", "outlined", "text"];

    const colorThemes: ColorTheme[] = [
        "primary",
        "primary-variant",
        "secondary",
        "tertiary",
        "error",
        "inverse-surface",
        "success",
    ];

    const options: SelectOptions[] = [
        {
            key: "cakes",
            displayValue: "Cakes 🎂",
            description:
                "A cake is a baked sweet food, traditionally made with flour, sugar, and eggs, often with added fats and leavening agents.",
        },
        {
            key: "cookies",
            displayValue: "Cookies 🍪",
            description:
                "Cookies are small, sweet baked goods made with flour, sugar, and fat, often featuring additions like chocolate chips, nuts, or fruit. ",
            disabled: true,
        },
        {
            key: "donuts",
            displayValue: "Donuts 🍩",
            description:
                "Donuts are a type of fried or baked pastry, typically made from flour, sugar, and eggs, and often shaped like a ring with a hole in the center. ",
        },
        {
            key: "pastries",
            displayValue: "Pastries 🍰",
            description:
                "Pastries are baked goods made from dough, often with a flaky or crumbly texture, and can be sweet or savory.",
        },
        {
            key: "ice-cream",
            displayValue: "Icecream 🍨",
            description:
                "A frozen dairy dessert made mainly of sweetened cream or a mixture of milk and cream and frozen in a churn to whip in air and keep the ice crystals small.",
        },
    ];

    const description = "Who doesn't like desserts?";

    const [dessert, setDessert] = useState<Key>("cookies");

    return (
        <PreviewContainer label="Select">
            {colorThemes.map((theme) => {
                return (
                    <div className="item-container" key={theme}>
                        {buttonVariants.map((variant) => {
                            return (
                                <Fragment key={`select:${variant}:${theme}`}>
                                    <Select
                                        label="Desserts"
                                        name="dessert"
                                        options={options}
                                        triggerVariant={variant}
                                        placeholder="Select your favorite dessert"
                                        description={description}
                                        triggerTheme={theme}
                                    />

                                    <Select
                                        label="Desserts"
                                        options={options}
                                        triggerVariant={variant}
                                        placeholder="Select your favorite dessert"
                                        description={description}
                                        selectedKey={dessert}
                                        triggerTheme={theme}
                                        onSelectionChange={(key) => {
                                            if (key === null) return;
                                            setDessert(key);
                                        }}
                                    />

                                    <Select
                                        label="Desserts"
                                        options={options}
                                        triggerVariant={variant}
                                        placeholder="Select your favorite dessert"
                                        disabled
                                        description={description}
                                        triggerTheme={theme}
                                    />
                                </Fragment>
                            );
                        })}
                    </div>
                );
            })}
        </PreviewContainer>
    );
};

const AvatarPreview = () => {
    const avatarSrc =
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const avatarChildren = "RV";

    const avatarSizes: AvatarSize[] = ["small", "normal", "large"];

    const avatarTheme: ColorTheme[] = [
        "primary",
        "primary-variant",
        "secondary",
        "tertiary",
        "error",
        "inverse-surface",
        "success",
    ];

    return (
        <PreviewContainer label="Avatar">
            {avatarSizes.map((size) => {
                return (
                    <div className="item-container" key={`avatar:${size}`}>
                        <Avatar size={size}>
                            <AvatarImage src={avatarSrc} alt="dog-smile" />
                        </Avatar>

                        {avatarTheme.map((theme) => {
                            return (
                                <Avatar
                                    size={size}
                                    theme={theme}
                                    key={`avatar:${size}:${theme}`}
                                >
                                    {avatarChildren}
                                </Avatar>
                            );
                        })}
                    </div>
                );
            })}
        </PreviewContainer>
    );
};

const ModalPreview = () => {
    return (
        <PreviewContainer label="Modal Base">
            <div className="item-container">
                <ModalBase
                    trigger={
                        <Button theme="primary" description="Open modal base">
                            Open modal
                        </Button>
                    }
                    modalOverlayProps={{
                        isDismissable: true,
                    }}
                >
                    <AvatarPreview />
                </ModalBase>
            </div>
        </PreviewContainer>
    );
};

const ModalActionPreview = () => {
    const modalTheme: ColorTheme[] = [
        "primary",
        "primary-variant",
        "secondary",
        "tertiary",
        "error",
        "inverse-surface",
        "success",
    ];

    const trigger = (theme: ColorTheme) => (
        <Button
            variant="outlined"
            theme={theme}
            description="Open modal action"
        >
            Open modal
        </Button>
    );

    return (
        <PreviewContainer label="Modal Action">
            <div className="item-container">
                {modalTheme.map((theme) => {
                    return (
                        <ModalAction
                            closeText="Close"
                            trigger={trigger(theme)}
                            key={theme}
                            header="Simple Modal"
                            actionPlacement="end"
                            modalAction={({ close }) => (
                                <Button onPress={close} theme={theme}>
                                    Okay
                                </Button>
                            )}
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus fermentum felis felis,
                                non euismod ipsum convallis at. Curabitur
                                efficitur, lectus et molestie feugiat, ipsum
                                justo euismod dolor, at dictum mi diam eget sem.
                                Donec at dui suscipit magna rhoncus lobortis at
                                quis ipsum. Curabitur mattis posuere libero, a
                                vehicula arcu sagittis in. Duis mollis quam in
                                turpis porta porta. Mauris quam orci, interdum
                                sit amet purus ac, laoreet accumsan mi. Aliquam
                                nec vulputate quam. Donec neque mi, bibendum eu
                                est eu, aliquam condimentum diam.
                            </p>

                            <p>
                                Cras tristique lorem vel magna porttitor
                                molestie. Ut pretium ullamcorper tellus.
                                Phasellus euismod neque non finibus pharetra.
                            </p>
                        </ModalAction>
                    );
                })}
            </div>
        </PreviewContainer>
    );
};

const MenuPreview = () => {
    const menuItems: HierarchyItemType[] = [
        {
            id: "1",
            type: "link",
            href: "https://google.com",
            target: "_blank",
            node: "Google",
        },
        {
            id: "2",
            type: "link",
            href: "https://adgytec.in",
            target: "_blank",
            node: "Adgytec",
        },
        {
            id: "3",
            type: "separator",
        },
        {
            id: "4",
            type: "button",
            onPress: () => alert("hmm i am pressed"),
            node: "Press me",
        },
        {
            id: "5",
            type: "button",
            onPress: () => {},
            node: "It will not do anything",
        },
        {
            id: "6",
            type: "separator",
        },
        {
            id: "7",
            type: "sub-items",
            subItems: [
                {
                    id: "1",
                    type: "link",
                    href: "https://google.com",
                    target: "_blank",
                    node: "Google",
                },
                {
                    id: "2",
                    type: "link",
                    href: "https://adgytec.in",
                    target: "_blank",
                    node: "Adgytec",
                },
                {
                    id: "3",
                    type: "separator",
                },
                {
                    id: "4",
                    type: "button",
                    onPress: () => alert("hmm i am pressed"),
                    node: "Press me",
                },
                {
                    id: "5",
                    type: "button",
                    onPress: () => {},
                    node: "It will not do anything",
                },
                {
                    id: "6",
                    type: "separator",
                },
                {
                    id: "7",
                    type: "sub-items",
                    subItems: [
                        {
                            id: "1",
                            type: "link",
                            href: "https://google.com",
                            target: "_blank",
                            node: "Google",
                        },
                        {
                            id: "2",
                            type: "link",
                            href: "https://adgytec.in",
                            target: "_blank",
                            node: "Adgytec",
                        },
                        {
                            id: "3",
                            type: "separator",
                        },
                        {
                            id: "4",
                            type: "button",
                            onPress: () => alert("hmm i am pressed"),
                            node: "Press me",
                        },
                        {
                            id: "5",
                            type: "button",
                            onPress: () => {},
                            node: "It will not do anything",
                        },
                        {
                            id: "6",
                            type: "separator",
                        },
                        {
                            id: "7",
                            type: "sub-items",
                            subItems: [
                                {
                                    id: "1",
                                    type: "link",
                                    href: "https://google.com",
                                    target: "_blank",
                                    node: "Google",
                                },
                                {
                                    id: "2",
                                    type: "link",
                                    href: "https://adgytec.in",
                                    target: "_blank",
                                    node: "Adgytec",
                                },
                                {
                                    id: "3",
                                    type: "separator",
                                },
                                {
                                    id: "4",
                                    type: "button",
                                    onPress: () => alert("hmm i am pressed"),
                                    node: "Press me",
                                },
                                {
                                    id: "5",
                                    type: "button",
                                    onPress: () => {},
                                    node: "It will not do anything",
                                },
                                {
                                    id: "6",
                                    type: "separator",
                                },
                                {
                                    id: "7",
                                    type: "sub-items",
                                    subItems: [
                                        {
                                            id: "1",
                                            type: "link",
                                            href: "https://google.com",
                                            target: "_blank",
                                            node: "Google",
                                        },
                                        {
                                            id: "2",
                                            type: "link",
                                            href: "https://adgytec.in",
                                            target: "_blank",
                                            node: "Adgytec",
                                        },
                                        {
                                            id: "3",
                                            type: "separator",
                                        },
                                        {
                                            id: "4",
                                            type: "button",
                                            onPress: () =>
                                                alert("hmm i am pressed"),
                                            node: "Press me",
                                        },
                                        {
                                            id: "5",
                                            type: "button",
                                            onPress: () => {},
                                            node: "It will not do anything",
                                        },
                                        {
                                            id: "6",
                                            type: "separator",
                                        },
                                        {
                                            id: "7",
                                            type: "sub-items",
                                            subItems: [],
                                            node: "Sub Items",
                                        },
                                        {
                                            id: "8",
                                            type: "item-node",
                                            node: (
                                                <Button
                                                    variant="outlined"
                                                    onPress={() =>
                                                        alert(
                                                            "sign out pressed"
                                                        )
                                                    }
                                                    theme="error"
                                                >
                                                    Sign Out
                                                </Button>
                                            ),
                                        },
                                    ],
                                    node: "Sub Items",
                                },
                                {
                                    id: "8",
                                    type: "item-node",
                                    node: (
                                        <Button
                                            variant="outlined"
                                            onPress={() =>
                                                alert("sign out pressed")
                                            }
                                            theme="error"
                                        >
                                            Sign Out
                                        </Button>
                                    ),
                                },
                            ],
                            node: "Sub Items",
                        },
                        {
                            id: "8",
                            type: "item-node",
                            node: (
                                <Button
                                    variant="outlined"
                                    onPress={() => alert("sign out pressed")}
                                    theme="error"
                                >
                                    Sign Out
                                </Button>
                            ),
                        },
                    ],
                    node: "Sub Items",
                },
                {
                    id: "8",
                    type: "item-node",
                    node: (
                        <Button
                            variant="outlined"
                            onPress={() => alert("sign out pressed")}
                            theme="error"
                        >
                            Sign Out
                        </Button>
                    ),
                },
            ],
            node: "Sub Items",
        },
        {
            id: "8",
            type: "item-node",
            node: (
                <Button
                    variant="outlined"
                    onPress={() => alert("sign out pressed")}
                    theme="error"
                >
                    Sign Out
                </Button>
            ),
        },
    ];

    return (
        <PreviewContainer label="Menu">
            <div className="item-container">
                <MenuButton menuItems={menuItems} cardBackground="gradient">
                    <Button>Open Menu</Button>
                </MenuButton>

                <MenuLabel menuItems={menuItems} description="avatar menu">
                    <Avatar theme="inverse-surface" background="inherit">
                        RV
                    </Avatar>
                </MenuLabel>
            </div>
        </PreviewContainer>
    );
};

const SidebarPreview = () => {
    const sidebarPositions: SidebarPosition[] = [
        "inline-start",
        "inline-end",
        "block-start",
        "block-end",
    ];

    const sidebarSizes: SidebarSize[] = [
        "full",
        "three-quarters",
        "half",
        "quarter",
    ];

    const getTrigger = (size: SidebarSize) => {
        let colorTheme: ColorTheme;
        switch (size) {
            case "full":
                colorTheme = "primary";
                break;
            case "three-quarters":
                colorTheme = "primary-variant";
                break;
            case "half":
                colorTheme = "secondary";
                break;
            case "quarter":
                colorTheme = "tertiary";
                break;
        }

        return (
            <Button variant="outlined" theme={colorTheme}>
                Open sidebar
            </Button>
        );
    };

    return (
        <PreviewContainer label="Sidebar">
            {sidebarPositions.map((position) => {
                return (
                    <div className="item-container" key={position}>
                        {sidebarSizes.map((size) => {
                            return (
                                <Sidebar
                                    key={size + position}
                                    sidebarSize={size}
                                    sidebarPosition={position}
                                    isDismissable
                                    trigger={getTrigger(size)}
                                >
                                    {({ close }) => {
                                        return (
                                            <div>
                                                <p>Sidebar content</p>

                                                <Button
                                                    variant="text"
                                                    onPress={close}
                                                >
                                                    Close
                                                </Button>
                                            </div>
                                        );
                                    }}
                                </Sidebar>
                            );
                        })}
                    </div>
                );
            })}
        </PreviewContainer>
    );
};

const TreePreview = () => {
    const tree: TreeHierarchyItemType[] = [
        {
            id: "1",
            type: "link",
            node: "Dashboard",
            href: "https://www.google.com",
            target: "_blank",
            active: true,
        },
        {
            id: "2",
            type: "button",
            node: "Actions",
            onPress: () => alert("Main action triggered"),
        },
        {
            id: "3",
            type: "sub-items",
            node: "Settings",
            subItems: [
                {
                    id: "3.1",
                    type: "link",
                    node: "Account",
                    href: "/settings/account",
                },
                {
                    id: "3.2",
                    type: "button",
                    node: "Logout",
                    onPress: () => alert("Logging out"),
                },
            ],
        },
        {
            id: "4",
            type: "sub-items",
            node: "Support",
            subItems: [
                {
                    id: "4.1",
                    type: "link",
                    node: "FAQ",
                    href: "/support/faq",
                },
                {
                    id: "4.2",
                    type: "link",
                    node: "Contact Us",
                    href: "/support/contact",
                    target: "_blank",
                },
            ],
        },
        {
            id: "5",
            type: "item-node",
            node: (
                <Button
                    variant="outlined"
                    theme="error"
                    onPress={() => {
                        alert("Signing out user");
                    }}
                >
                    Sign out
                </Button>
            ),
        },
    ];

    return (
        <PreviewContainer label="Tree">
            <Tree items={tree} />
        </PreviewContainer>
    );
};

const NavSidebarPreview = () => {
    const tree: TreeHierarchyItemType[] = [
        {
            id: "1",
            type: "link",
            node: "Dashboard",
            href: "https://www.google.com",
            target: "_blank",
            active: true,
        },
        {
            id: "2",
            type: "button",
            node: "Actions",
            onPress: () => alert("Main action triggered"),
        },
        {
            id: "3",
            type: "sub-items",
            node: "Settings",
            subItems: [
                {
                    id: "3.1",
                    type: "link",
                    node: "Account",
                    href: "/settings/account",
                },
                {
                    id: "3.2",
                    type: "button",
                    node: "Logout",
                    onPress: () => alert("Logging out"),
                },
            ],
        },
        {
            id: "4",
            type: "sub-items",
            node: "Support",
            subItems: [
                {
                    id: "4.1",
                    type: "link",
                    node: "FAQ",
                    href: "/support/faq",
                },
                {
                    id: "4.2",
                    type: "link",
                    node: "Contact Us",
                    href: "/support/contact",
                    target: "_blank",
                },
            ],
        },
        {
            id: "5",
            type: "item-node",
            node: (
                <Button
                    variant="outlined"
                    theme="error"
                    onPress={() => {
                        alert("Signing out user");
                    }}
                >
                    Sign out
                </Button>
            ),
        },
    ];

    return (
        <PreviewContainer label="Nav Sidebar">
            <div className="items-container">
                <NavigationSidebar items={tree} />
            </div>
        </PreviewContainer>
    );
};

const NavMenuPreview = () => {
    const tree: HierarchyItemType[] = [
        {
            id: "1",
            type: "link",
            node: "Dashboard",
            href: "https://www.google.com",
            target: "_blank",
            active: true,
        },
        {
            id: "2",
            type: "button",
            node: "Actions",
            onPress: () => alert("Main action triggered"),
        },
        {
            id: "3",
            type: "sub-items",
            node: "Settings",
            subItems: [
                {
                    id: "3.1",
                    type: "link",
                    node: "Account",
                    href: "/settings/account",
                },
                {
                    id: "3.2",
                    type: "button",
                    node: "Logout",
                    onPress: () => alert("Logging out"),
                },
            ],
        },
        {
            id: "4",
            type: "sub-items",
            node: "Support",
            subItems: [
                {
                    id: "4.1",
                    type: "link",
                    node: "FAQ",
                    href: "/support/faq",
                },
                {
                    id: "4.2",
                    type: "link",
                    node: "Contact Us",
                    href: "/support/contact",
                    target: "_blank",
                },
            ],
        },
        {
            id: "5",
            type: "item-node",
            node: (
                <Button
                    variant="outlined"
                    theme="error"
                    onPress={() => {
                        alert("Signing out user");
                    }}
                >
                    Sign out
                </Button>
            ),
        },
    ];

    return (
        <PreviewContainer label="Nav Menu">
            <NavigationMenu items={tree} />
        </PreviewContainer>
    );
};

const NavResponsivePreview = () => {
    const tree: TreeHierarchyItemType[] = [
        {
            id: "1",
            type: "link",
            node: "Dashboard",
            href: "https://www.google.com",
            target: "_blank",
            active: true,
        },
        {
            id: "2",
            type: "button",
            node: "Actions",
            onPress: () => alert("Main action triggered"),
        },
        {
            id: "3",
            type: "sub-items",
            node: "Settings",
            subItems: [
                {
                    id: "3.1",
                    type: "link",
                    node: "Account",
                    href: "/settings/account",
                },
                {
                    id: "3.2",
                    type: "button",
                    node: "Logout",
                    onPress: () => alert("Logging out"),
                },
            ],
        },
        {
            id: "4",
            type: "sub-items",
            node: "Support",
            subItems: [
                {
                    id: "4.1",
                    type: "link",
                    node: "FAQ",
                    href: "/support/faq",
                },
                {
                    id: "4.2",
                    type: "link",
                    node: "Contact Us",
                    href: "/support/contact",
                    target: "_blank",
                },
            ],
        },
        {
            id: "5",
            type: "item-node",
            node: (
                <Button
                    variant="outlined"
                    theme="error"
                    onPress={() => {
                        alert("Signing out user");
                    }}
                >
                    Sign out
                </Button>
            ),
        },
    ];

    return (
        <PreviewContainer label="Nav Responsive">
            <div className="items-container">
                <NavigationResponsive
                    items={tree}
                    mediaQuery="min-width:48em"
                />
            </div>
        </PreviewContainer>
    );
};

const DisclosurePreview = () => {
    const buttonTheme: ColorTheme[] = [
        "primary",
        "primary-variant",
        "secondary",
        "tertiary",
        "error",
        "inverse-surface",
        "success",
    ];

    return (
        <PreviewContainer label="Disclosure">
            {buttonTheme.map((theme) => (
                <div className="item-container" key={theme}>
                    <Disclosure
                        heading="Hello click this to open"
                        triggerTheme={theme}
                    >
                        A cake is a baked sweet food, traditionally made with
                        flour, sugar, and eggs, often with added fats and
                        leavening agents.
                    </Disclosure>
                </div>
            ))}
        </PreviewContainer>
    );
};

const DisclosureGroupPreview = () => {
    const items: DisclosureProps[] = [
        {
            id: "1",
            heading: "hello click this to open",
            children:
                "A cake is a baked sweet food, traditionally made with flour, sugar, and eggs, often with added fats and leavening agents.",
        },
        {
            id: "2",
            heading: "hello click this to open",
            children:
                "A cake is a baked sweet food, traditionally made with flour, sugar, and eggs, often with added fats and leavening agents.",
        },
        {
            id: "3",
            heading: "hello click this to open",
            children:
                "A cake is a baked sweet food, traditionally made with flour, sugar, and eggs, often with added fats and leavening agents.",
        },
    ];

    return (
        <PreviewContainer label="Disclosure Group">
            <DisclosureGroup items={items} />
        </PreviewContainer>
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

const ToggleButtonPreview = () => {
    const buttonTheme: ColorTheme[] = [
        "primary",
        "primary-variant",
        "secondary",
        "tertiary",
        "error",
        "inverse-surface",
        "success",
    ];

    return (
        <PreviewContainer label="Toggle Button Group">
            {buttonTheme.map((theme) => {
                const children = (
                    <>
                        <ToggleButton theme={theme} id="light">
                            Light
                        </ToggleButton>

                        <ToggleButton theme={theme} id="dark">
                            Dark
                        </ToggleButton>

                        <ToggleButton theme={theme} id="system">
                            System
                        </ToggleButton>
                    </>
                );

                return (
                    <div className="item-container" key={theme}>
                        <ToggleButtonGroup
                            selectionMode="single"
                            disallowEmptySelection
                            orientation="horizontal"
                        >
                            {children}
                        </ToggleButtonGroup>

                        <ToggleButtonGroup
                            selectionMode="single"
                            disallowEmptySelection
                            orientation="horizontal"
                            isDisabled
                        >
                            {children}
                        </ToggleButtonGroup>

                        <ToggleButtonGroup
                            selectionMode="single"
                            disallowEmptySelection
                            orientation="vertical"
                        >
                            {children}
                        </ToggleButtonGroup>

                        <ToggleButtonGroup
                            selectionMode="single"
                            disallowEmptySelection
                            orientation="vertical"
                            isDisabled
                        >
                            {children}
                        </ToggleButtonGroup>
                    </div>
                );
            })}
        </PreviewContainer>
    );
};

const CardPreview = () => {
    const backgrounds: SolidCardBackground[] = [
        "solid",
        "solid-high",
        "solid-highest",
        "solid-low",
        "solid-lowest",
    ];

    const imgsrc =
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const cardChild = (
        <>
            <img
                src={imgsrc}
                style={{
                    borderRadius: "inherit",
                }}
                alt="sample"
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sit amet egestas justo. Integer lobortis vulputate finibus.
                Morbi eget feugiat odio. Sed lectus massa, malesuada at laoreet
                non, porttitor non elit. Maecenas imperdiet varius nisi, non
                gravida velit egestas quis. Fusce tincidunt ac nulla ac
                condimentum. Integer auctor, libero vel maximus laoreet, nisl
                erat rhoncus nunc, a facilisis risus libero a felis.{" "}
            </p>
        </>
    );

    return (
        <PreviewContainer label="Card Preview">
            <div className="item-container">
                {backgrounds.map((background) => {
                    return (
                        <SolidCard
                            key={`solid:${background}`}
                            background={background}
                        >
                            {cardChild}
                        </SolidCard>
                    );
                })}

                <GradientCard>{cardChild}</GradientCard>
            </div>
        </PreviewContainer>
    );
};

const VisualSettingsPreview = () => {
    return (
        <>
            <PreviewContainer label="Theme Switcher">
                <ThemeSwitcher ui={false} />
                <ThemeSwitcher />
            </PreviewContainer>

            {/* <PreviewContainer label="Component Shape Switcher"> */}
            {/*     <ComponentShapeSwitcher ui={false} /> */}
            {/*     <ComponentShapeSwitcher /> */}
            {/* </PreviewContainer> */}
        </>
    );
};

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

const App = () => {
    const previewElements = [
        CheckboxPreview,
        RadioPreview,
        IconPreview,
        VisualSettingsPreview,
        SwitchPreview,
        // ButtonPreview,
        // LinkPreview,
        // CardPreview,
        // SelectPreview,
        // AvatarPreview,
        // ModalPreview,
        // ModalActionPreview,
        // MenuPreview,
        // SidebarPreview,
        // TreePreview,
        // NavSidebarPreview,
        // NavMenuPreview,
        // NavResponsivePreview,
        // DisclosurePreview,
        // DisclosureGroupPreview,
        // ToggleButtonPreview,
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
