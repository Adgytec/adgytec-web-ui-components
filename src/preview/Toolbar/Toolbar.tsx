import { Armchair, Globe, GlobeOff } from "lucide-react";
import { Fragment } from "react";
import type { Orientation } from "react-aria";
import {
    Button,
    IconButton,
    ToggleButton,
    ToggleIconButton,
} from "../../components/Button";
import { Divider } from "../../components/Divider";
import {
    Toolbar,
    type ToolbarColor,
    ToolbarToggleButtonGroup,
    type ToolbarVariant,
} from "../../components/Toolbar";

export const RenderToolbar = ({
    color,
    variant,
    orientation = "horizontal",
    isDisabled,
}: {
    color?: ToolbarColor;
    variant?: ToolbarVariant;
    orientation?: Orientation;
    isDisabled?: boolean;
}) => {
    return (
        <>
            <div className={"items"} data-toolbar={true}>
                <Toolbar
                    color={color}
                    variant={variant}
                    orientation={orientation}
                >
                    <IconButton
                        icon={Armchair}
                        isDisabled={isDisabled}
                        color="outlined"
                    />

                    <IconButton icon={Armchair} isDisabled={isDisabled} />

                    <IconButton
                        icon={Armchair}
                        color="standard"
                        isDisabled={isDisabled}
                    />

                    <IconButton
                        icon={Armchair}
                        color="tonal"
                        isDisabled={isDisabled}
                    />
                </Toolbar>

                <Toolbar
                    color={color}
                    variant={variant}
                    orientation={orientation}
                >
                    <ToggleIconButton
                        icon={Globe}
                        isDisabled={isDisabled}
                        selectedIcon={GlobeOff}
                    />

                    <ToggleIconButton
                        icon={Globe}
                        selectedIcon={GlobeOff}
                        color="outlined"
                        isDisabled={isDisabled}
                    />

                    <ToggleIconButton
                        icon={Globe}
                        selectedIcon={GlobeOff}
                        color="standard"
                        isDisabled={isDisabled}
                    />

                    <ToggleIconButton
                        icon={Globe}
                        selectedIcon={GlobeOff}
                        color="tonal"
                        isDisabled={isDisabled}
                    />
                </Toolbar>

                <Toolbar
                    color={color}
                    variant={variant}
                    orientation={orientation}
                >
                    <ToolbarToggleButtonGroup>
                        <ToggleIconButton
                            id={1}
                            icon={Globe}
                            isDisabled={isDisabled}
                            selectedIcon={GlobeOff}
                        />

                        <ToggleIconButton
                            id={2}
                            icon={Globe}
                            selectedIcon={GlobeOff}
                            color="outlined"
                            isDisabled={isDisabled}
                        />

                        <ToggleIconButton
                            id={3}
                            icon={Globe}
                            selectedIcon={GlobeOff}
                            color="standard"
                            isDisabled={isDisabled}
                        />

                        <ToggleIconButton
                            id={4}
                            icon={Globe}
                            selectedIcon={GlobeOff}
                            color="tonal"
                            isDisabled={isDisabled}
                        />
                    </ToolbarToggleButtonGroup>

                    <Divider
                        orientation={
                            orientation === "vertical"
                                ? "horizontal"
                                : "vertical"
                        }
                    />

                    <ToolbarToggleButtonGroup>
                        <ToggleIconButton
                            id={1}
                            icon={Globe}
                            isDisabled={isDisabled}
                            selectedIcon={GlobeOff}
                        />

                        <ToggleIconButton
                            id={2}
                            icon={Globe}
                            selectedIcon={GlobeOff}
                            color="outlined"
                            isDisabled={isDisabled}
                        />

                        <ToggleIconButton
                            id={3}
                            icon={Globe}
                            selectedIcon={GlobeOff}
                            color="standard"
                            isDisabled={isDisabled}
                        />

                        <ToggleIconButton
                            id={4}
                            icon={Globe}
                            selectedIcon={GlobeOff}
                            color="tonal"
                            isDisabled={isDisabled}
                        />
                    </ToolbarToggleButtonGroup>
                </Toolbar>

                {orientation === "horizontal" && (
                    <>
                        <Toolbar
                            color={color}
                            variant={variant}
                            orientation={orientation}
                            className="toolbar-overflow"
                        >
                            <Button
                                icon={Armchair}
                                color="outlined"
                                isDisabled={isDisabled}
                            >
                                Chair
                            </Button>
                            <Button
                                icon={Armchair}
                                color="text"
                                isDisabled={isDisabled}
                            >
                                Chair
                            </Button>

                            <Button icon={Armchair} isDisabled={isDisabled}>
                                Chair
                            </Button>

                            <Button
                                icon={Armchair}
                                color="tonal"
                                isDisabled={isDisabled}
                            >
                                Chair
                            </Button>

                            <Button
                                icon={Armchair}
                                color="elevated"
                                isDisabled={isDisabled}
                            >
                                Chair
                            </Button>
                        </Toolbar>

                        <Toolbar
                            color={color}
                            variant={variant}
                            orientation={orientation}
                            className="toolbar-overflow"
                        >
                            <ToggleButton
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                isDisabled={isDisabled}
                            >
                                Globe
                            </ToggleButton>

                            <ToggleButton
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                color="outlined"
                                isDisabled={isDisabled}
                            >
                                Globe
                            </ToggleButton>

                            <ToggleButton
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                color="tonal"
                                isDisabled={isDisabled}
                            >
                                Globe
                            </ToggleButton>

                            <ToggleButton
                                icon={Globe}
                                selectedIcon={GlobeOff}
                                color="elevated"
                                isDisabled={isDisabled}
                            >
                                Globe
                            </ToggleButton>
                        </Toolbar>
                    </>
                )}
            </div>

            <Divider />
        </>
    );
};

export const ToolbarPreview = () => {
    const orientation: Orientation[] = ["horizontal", "vertical"];

    return (
        <div className="items-grid">
            {orientation.map((o) => (
                <Fragment key={o}>
                    <RenderToolbar orientation={o} />
                    <RenderToolbar orientation={o} isDisabled />

                    <RenderToolbar variant="floating" orientation={o} />
                    <RenderToolbar
                        variant="floating"
                        orientation={o}
                        isDisabled
                    />

                    <RenderToolbar color="vibrant" orientation={o} />
                    <RenderToolbar color="vibrant" orientation={o} isDisabled />

                    <RenderToolbar
                        color="vibrant"
                        variant="floating"
                        orientation={o}
                    />
                    <RenderToolbar
                        color="vibrant"
                        variant="floating"
                        orientation={o}
                        isDisabled
                    />
                </Fragment>
            ))}
        </div>
    );
};

export default ToolbarPreview;
