import { useLocalStorage } from "usehooks-ts";
import {
    ComponentShapeKey,
    type ComponentShapes,
    type ComponentShapeSwitcherProps,
    type ShapeValue,
} from "./types";
import { useEffect } from "react";
import { type Key } from "react-aria-components";
import {
    type ToggleButtonGroupItem,
    ToggleButtonGroup,
} from "@/components/ToggleButtonGroup";

const defaultShapeValue: ShapeValue = {
    sharp: "Sharp",
    round: "Round",
};

export const ComponentShapeSwitcher: React.FC<ComponentShapeSwitcherProps> = ({
    ui = true,
    theme = "primary",
    displayValue = defaultShapeValue,
}) => {
    const [selectedShape, setShape, _] = useLocalStorage<ComponentShapes>(
        ComponentShapeKey,
        "sharp"
    );

    const shapeItems: ToggleButtonGroupItem[] = [
        {
            id: "sharp",
            value: displayValue.sharp,
        },
        {
            id: "round",
            value: displayValue.round,
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
