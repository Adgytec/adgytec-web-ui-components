import {
    Clipboard,
    LogOut,
    type LucideIcon,
    Settings,
    User,
} from "lucide-react";
import type React from "react";
import { SubmenuTrigger } from "react-aria-components";
import { Button, type ButtonColor } from "../../components/Button";
import { Divider } from "../../components/Divider";
import {
    Menu,
    MenuItem,
    MenuPopover,
    MenuSection,
    MenuShortcut,
    MenuTrigger,
    SubmenuPopover,
} from "../../components/Menu";

export const MenuPreview = () => {
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

export default MenuPreview;
