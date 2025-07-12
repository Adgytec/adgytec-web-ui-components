import TextButton from "../../Button/TextButton";
import { ButtonShape } from "../../Button/types";
import Sidebar from "../../Sidebar/Sidebar";
import Tree from "../../Tree/Tree";
import type { NavigationSidebarProps } from "./types";
import { Menu, X } from "lucide-react";
import styles from "./navigationSidebar.module.css";
import { ColorTheme } from "../../../utils/types";

const NavigationSidebar = ({ items }: NavigationSidebarProps) => {
  return (
    <Sidebar
      trigger={
        <TextButton shape={ButtonShape.square}>
          <Menu />
        </TextButton>
      }
    >
      {({ close }) => {
        return (
          <div className={styles["nav"]}>
            <div className={styles["close"]}>
              <TextButton
                onPress={close}
                shape={ButtonShape.square}
                theme={ColorTheme.inverseSurface}
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

export default NavigationSidebar;
