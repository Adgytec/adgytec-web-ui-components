import { ColorTheme } from "@adgytec/adgytec-web-ui-components";
import { PopoverDialog } from "@adgytec/adgytec-web-ui-components/Popover/PopoverDialog";
import { TextButton } from "@adgytec/adgytec-web-ui-components/Button/TextButton";
import { ButtonShape } from "@adgytec/adgytec-web-ui-components/Button/ButtonBase";
import { ComponentShapeSwitcher } from "../ComponentShapeSwitcher/ComponentShapeSwitcher";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { Settings } from "lucide-react";
import styles from "./visual-settings.module.css";
import type React from "react";
import type { VisualSettingsProps } from "./types";
import { SolidCard } from "@adgytec/adgytec-web-ui-components/Card/SolidCard";

export const VisualSettings: React.FC<VisualSettingsProps> = ({
  ui = true,
}) => {
  if (!ui) {
    return (
      <>
        <ThemeSwitcher ui={false} />
        <ComponentShapeSwitcher ui={false} />
      </>
    );
  }

  const visualSettingsItems = [
    {
      Component: ThemeSwitcher,
      heading: "Personalize Color Theme",
      description: "Adjust the app's overall color scheme.",
    },
    {
      Component: ComponentShapeSwitcher,
      heading: "Edge Style",
      description: "Toggle between rounded and sharp component edges.",
    },
  ];

  const itemTheme = ColorTheme.inverseSurface;

  return (
    <PopoverDialog
      trigger={
        <TextButton
          shape={ButtonShape.square}
          description="Visual Settings"
          theme={itemTheme}
        >
          <Settings />
        </TextButton>
      }
    >
      <SolidCard className={styles["visual-settings"]}>
        {visualSettingsItems.map((visualItem) => (
          <div className={styles["settings-item"]} key={visualItem.heading}>
            <div>
              <h3 data-heading="true">{visualItem.heading}</h3>
              <p>{visualItem.description}</p>
            </div>
            <visualItem.Component theme={itemTheme} />
          </div>
        ))}
      </SolidCard>
    </PopoverDialog>
  );
};
