import { useTernaryDarkMode, type TernaryDarkMode } from "usehooks-ts";
import type { Key } from "react-aria-components";
import React, { useEffect } from "react";
import type { ThemeSwitcherProps } from "./types";
import { ColorTheme } from "@adgytec/adgytec-web-ui-components";
import {
  type ToggleButtonGroupItem,
  ToggleButtonGroup,
} from "@adgytec/adgytec-web-ui-components/ToggleButtonGroup";

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  ui = true,
  theme = ColorTheme.primary,
}) => {
  const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
    useTernaryDarkMode();

  const themeItems: ToggleButtonGroupItem[] = [
    {
      id: "system",
      value: "System",
    },
    {
      id: "light",
      value: "Light",
    },
    {
      id: "dark",
      value: "Dark",
    },
  ];

  const updateTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light",
    );
  };

  useEffect(() => {
    updateTheme();
  }, [isDarkMode]);

  const handleThemeChange = (keys: Set<Key>) => {
    const theme = Array.from(keys)[0] as TernaryDarkMode;
    if (!theme) return;

    setTernaryDarkMode(theme);
  };

  if (!ui) {
    return <></>;
  }

  return (
    <ToggleButtonGroup
      items={themeItems}
      selectionMode="single"
      selectedKeys={[ternaryDarkMode]}
      onSelectionChange={handleThemeChange}
      theme={theme}
    />
  );
};
