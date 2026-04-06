// TODO: better way to handle this

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Tree } from "@/components/Tree/Tree";
import styles from "./navigationSidebar.module.css";
import type { NavigationSidebarProps } from "./types";

export const NavigationSidebar = ({
    items,
    ...sidebarProps
}: NavigationSidebarProps) => {
    return (
        <Sidebar
            {...sidebarProps}
            trigger={
                <Button variant="text" shape="square">
                    <Menu />
                </Button>
            }
        >
            {({ close }) => {
                return (
                    <div className={clsx(styles["nav"])}>
                        <div className={clsx(styles["close"])}>
                            <Button
                                variant="text"
                                onPress={close}
                                shape="square"
                                theme="inverse-surface"
                            >
                                <X />
                            </Button>
                        </div>
                        <Tree items={items} />
                    </div>
                );
            }}
        </Sidebar>
    );
};
