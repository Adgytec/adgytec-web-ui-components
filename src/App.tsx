import { FileBraces, Mouse, MouseOff } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { Tooltip, TooltipTrigger } from "./components/Tooltip";
import "./styles/app.css";
import {
    Button,
    IconButton,
    ToggleButton,
    ToggleIconButton,
    type ButtonColor,
    type ButtonShape,
    type ButtonSize,
    type IconButtonColor,
    type IconButtonWidth,
    type ToggleButtonColor,
} from "./components/Button";
import { Checkbox, CheckboxGroup } from "./components/Checkbox";
import { Icon } from "./components/Icon";
import { Input } from "./components/Input";
import { Radio, RadioGroup } from "./components/Radio";
import { Switch } from "./components/Switch";
import { TextArea } from "./components/TextArea";
import { Viewport } from "./components/Viewport";
import { ThemeSwitcher } from "./components/VisualSettings/ThemeSwitcher";
import { typography } from "./utils/typography";

// preview container
const PreviewContainer = (props: { label: string; children: ReactNode }) => {
    return (
        <div className="preview-container">
            <h2 className={typography.headlineLargeEmphasized}>
                {props.label}
            </h2>
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

const VisualSettingsPreview = () => {
    return (
        <PreviewContainer label="Theme Switcher">
            <ThemeSwitcher ui={false} />
            <ThemeSwitcher />
        </PreviewContainer>
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

const TextfieldPreview = () => {
    return (
        <PreviewContainer label="Textfield">
            <Input
                label="input"
                placeholder="input"
                isDisabled
                description="trial description"
            />

            <TextArea
                label="textarea"
                rows={2}
                placeholder="textarea"
                isDisabled
                description="trial description"
            />

            <Input
                label="input"
                placeholder="input"
                description="trial description"
                isRequired
                type="email"
            />

            <TextArea
                label="textarea"
                rows={2}
                placeholder="textarea"
                description="trial description"
            />

            <Input
                label="input"
                placeholder="input"
                isInvalid
                description="trial description"
                errorMessage={"trial error"}
            />

            <TextArea
                label="textarea"
                rows={2}
                placeholder="textarea"
                isInvalid
                description="trial description"
                errorMessage={"trial error"}
            />
        </PreviewContainer>
    );
};

const ButtonPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];
    const shapes: ButtonShape[] = ["round", "square"];

    const buttonColor: ButtonColor[] = [
        "filled",
        "tonal",
        "outlined",
        "text",
        "elevated",
    ];

    return (
        <PreviewContainer label="Button">
            {buttonColor.map((color) => (
                <div className="button-color" key={`button-${color}`}>
                    <h3 className={typography.headlineMediumEmphasized}>
                        {color}
                    </h3>

                    {sizes.map((size) => (
                        <div className="button-size" key={size}>
                            <h4 className={typography.headlineSmall}>{size}</h4>

                            {shapes.map((shape) => (
                                <div className="buttons" key={shape}>
                                    <Button
                                        size={size}
                                        shape={shape}
                                        color={color}
                                    >
                                        click me
                                    </Button>

                                    <Button
                                        size={size}
                                        shape={shape}
                                        color={color}
                                        icon={Mouse}
                                    >
                                        click me
                                    </Button>

                                    <Button
                                        size={size}
                                        shape={shape}
                                        color={color}
                                        isPending
                                    >
                                        click me
                                    </Button>

                                    <Button
                                        size={size}
                                        shape={shape}
                                        color={color}
                                        isDisabled
                                    >
                                        click me
                                    </Button>

                                    {color !== "text" && (
                                        <ToggleButton
                                            size={size}
                                            shape={shape}
                                            color={color}
                                        >
                                            click me
                                        </ToggleButton>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </PreviewContainer>
    );
};

const IconButtonPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];
    const shapes: ButtonShape[] = ["round", "square"];

    const iconButtonWidth: IconButtonWidth[] = ["narrow", "default", "wide"];
    const iconButtonColor: IconButtonColor[] = [
        "filled",
        "tonal",
        "outlined",
        "standard",
    ];

    return (
        <PreviewContainer label="Icon Button">
            {iconButtonColor.map((color) => (
                <div key={`icon-button-${color}`} className="button-color">
                    <h3 className={typography.headlineMedium}>{color}</h3>

                    {sizes.map((size) => (
                        <div className="button-size" key={size}>
                            <h4 className={typography.headlineSmall}>{size}</h4>

                            {iconButtonWidth.map((width) => (
                                <Fragment key={width}>
                                    <h5
                                        className={
                                            typography.titleMediumEmphasized
                                        }
                                    >
                                        {width}
                                    </h5>
                                    {shapes.map((shape) => (
                                        <div key={shape} className="buttons">
                                            <IconButton
                                                size={size}
                                                shape={shape}
                                                color={color}
                                                icon={Mouse}
                                                width={width}
                                            />

                                            <IconButton
                                                size={size}
                                                shape={shape}
                                                color={color}
                                                icon={Mouse}
                                                width={width}
                                                isPending
                                            />

                                            <IconButton
                                                size={size}
                                                shape={shape}
                                                color={color}
                                                icon={Mouse}
                                                width={width}
                                                isDisabled
                                            />

                                            <ToggleIconButton
                                                size={size}
                                                shape={shape}
                                                color={color}
                                                icon={Mouse}
                                                width={width}
                                                selectedIcon={MouseOff}
                                            />
                                        </div>
                                    ))}
                                </Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </PreviewContainer>
    );
};

const App = () => {
    const previewElements = [
        VisualSettingsPreview,
        ButtonPreview,
        IconButtonPreview,
        TextfieldPreview,
        TooltipPreview,
        CheckboxPreview,
        RadioPreview,
        IconPreview,
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
