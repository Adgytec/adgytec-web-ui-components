import { FileBraces } from "lucide-react";
import type { ReactNode } from "react";
import { ToggleButtonGroup } from "./components/ToggleButtonGroup";
import { Tooltip, TooltipTrigger } from "./components/Tooltip";
import type { ColorTheme } from "./utils/hierarchy";
import "./styles/app.css";
import { Button } from "./components/Button";
import type { SolidCardBackground } from "./components/Card/BaseCard";
import { GradientCard } from "./components/Card/GradientCard";
import { SolidCard } from "./components/Card/SolidCard";
import { Checkbox, CheckboxGroup } from "./components/Checkbox";
import { Icon } from "./components/Icon";
import { Radio, RadioGroup } from "./components/Radio";
import { Switch } from "./components/Switch";
import { ToggleButton } from "./components/ToggleButton";
import { Viewport } from "./components/Viewport";
import { ThemeSwitcher } from "./components/VisualSettings/ThemeSwitcher";

// preview container
const PreviewContainer = (props: { label: string; children: ReactNode }) => {
    return (
        <div className="preview-container">
            <h2>{props.label}</h2>
            <div className="preview-container__items">{props.children}</div>
        </div>
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

            <Checkbox isIndeterminate isDisabled>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Checkbox>

            <Checkbox isIndeterminate>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Checkbox>

            <Checkbox isIndeterminate isInvalid>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Checkbox>

            <Checkbox isIndeterminate isInvalid isDisabled>
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

const TooltipPreview = () => {
    return (
        <PreviewContainer label="Tooltip">
            <div>
                <TooltipTrigger>
                    <Button>Tooltip demo</Button>

                    <Tooltip>Lorem ipsum dolor sit amet.</Tooltip>
                </TooltipTrigger>
            </div>
        </PreviewContainer>
    );
};

const App = () => {
    const previewElements = [
        TooltipPreview,
        CheckboxPreview,
        RadioPreview,
        IconPreview,
        VisualSettingsPreview,
        SwitchPreview,
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
