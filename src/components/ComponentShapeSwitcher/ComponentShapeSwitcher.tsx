import { useLocalStorage } from "usehooks-ts";
import {
  ComponentShapeKey,
  ComponentShapes,
  type ComponentShapeSwitcherProps,
} from "./types";
import React, { useEffect } from "react";
import { type Key } from "react-aria-components";
import { ColorTheme } from "@adgytec/adgytec-web-ui-components";
import {
  type ToggleButtonGroupItem,
  ToggleButtonGroup,
} from "@adgytec/adgytec-web-ui-components/ToggleButtonGroup";

export const ComponentShapeSwitcher: React.FC<ComponentShapeSwitcherProps> = ({
  ui = true,
  theme = ColorTheme.primary,
}) => {
  const [selectedShape, setShape, _] = useLocalStorage(
    ComponentShapeKey,
    ComponentShapes.sharp,
  );

  const shapeItems: ToggleButtonGroupItem[] = [
    {
      id: ComponentShapes.sharp,
      value: "Sharp",
    },
    {
      id: ComponentShapes.round,
      value: "Round",
    },
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-shape", selectedShape);
  }, [selectedShape]);

  const handleShapeChange = (keys: Set<Key>) => {
    const shape = Array.from(keys)[0] as ComponentShapes;
    if (!shape) return;

    setShape(shape);
  };

  if (!ui) return <></>;

  return (
    <ToggleButtonGroup
      items={shapeItems}
      selectionMode="single"
      selectedKeys={[selectedShape]}
      onSelectionChange={handleShapeChange}
      theme={theme}
    />
  );
};
