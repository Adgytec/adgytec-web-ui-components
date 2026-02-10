import { TextButton } from "@/components/Button/TextButton";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Tree } from "@/components/Tree/Tree";
import type { NavigationSidebarProps } from "./types";
import { Menu, X } from "lucide-react";
import styles from "./navigationSidebar.module.css";
import clsx from "clsx";

export const NavigationSidebar = ({
    items,
    ...sidebarProps
}: NavigationSidebarProps) => {
    return (
        <Sidebar
            {...sidebarProps}
            trigger={
                <TextButton shape="square">
                    <Menu />
                </TextButton>
            }
        >
            {({ close }) => {
                return (
                    <div className={clsx(styles["nav"])}>
                        <div className={clsx(styles["close"])}>
                            <TextButton
                                onPress={close}
                                shape="square"
                                theme="inverse-surface"
                            >
                                <X />
                            </TextButton>
                        </div>
                        <Tree items={items} />
                    </div>
                );
            }}
        </Sidebar>
    );
};
