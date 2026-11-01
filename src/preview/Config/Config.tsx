import { Download, Eye, GlobeLock, Mail, Share2 } from "lucide-react";
import { SubmenuTrigger } from "react-aria-components";
import {
    Button,
    SplitButton,
    SplitButtonPrimary,
    SplitButtonTrigger,
} from "../../components/Button";
import {
    CenteredSlider,
    Checkbox,
    Input,
    Radio,
    RadioGroup,
    RangeSlider,
    Slider,
    Switch,
} from "../../components/Input";
import {
    Menu,
    MenuItem,
    type MenuLayout,
    MenuSection,
    MenuSectionHeader,
    MenuTrigger,
    SubmenuPopover,
} from "../../components/Menu";
import { Popover } from "../../components/Popover";

export const SplitButtonConfig = ({
    className,
    layout,
    menuClassName,
}: {
    className?: string;
    layout?: MenuLayout;
    menuClassName?: string;
}) => {
    return (
        <SplitButton className={className}>
            <SplitButtonPrimary tooltip="download" icon={Download}>
                Download
            </SplitButtonPrimary>

            <MenuTrigger layout={layout}>
                <SplitButtonTrigger tooltip="more actions" />
                <Popover>
                    <Menu className={menuClassName}>
                        <MenuSection>
                            <MenuSectionHeader>Quick Actions</MenuSectionHeader>

                            <MenuItem trailingIcon={Eye} label="Preview" />

                            <MenuItem trailingIcon={Share2} label="Share" />
                        </MenuSection>

                        <MenuSection>
                            <MenuSectionHeader>Security</MenuSectionHeader>

                            <MenuItem
                                trailingIcon={GlobeLock}
                                supportingText="Make item private"
                                label="Private"
                            />

                            <SubmenuTrigger>
                                <MenuItem
                                    trailingIcon={GlobeLock}
                                    supportingText="Make item private"
                                    label="More"
                                />

                                <SubmenuPopover>
                                    <Menu className={menuClassName}>
                                        <MenuSection>
                                            <MenuItem label="Lock" />

                                            <MenuItem label="Archive" />
                                        </MenuSection>
                                    </Menu>
                                </SubmenuPopover>
                            </SubmenuTrigger>
                        </MenuSection>
                    </Menu>
                </Popover>
            </MenuTrigger>
        </SplitButton>
    );
};

export const ConfigPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <Button className="primary">primary</Button>
                <Button className="primary-container">primary container</Button>

                <Button className="primary-alt">primary alt</Button>
                <Button className="primary-alt-container">
                    primary alt container
                </Button>

                <Button className="error">error</Button>
                <Button className="error-container">error container</Button>

                <Button className="secondary">secondary</Button>
                <Button className="secondary-container">
                    secondary container
                </Button>

                <Button className="tertiary">tertiary</Button>
                <Button className="tertiary-container">
                    tertiary container
                </Button>

                <Button className="inverse">inverse</Button>
                <Button className="inverse-primary">inverse primary</Button>

                <Button className="primary-fixed">primary fixed</Button>
                <Button className="primary-fixed-dim">primary fixed dim</Button>

                <Button className="secondary-fixed">secondary fixed</Button>
                <Button className="secondary-fixed-dim">
                    secondary fixed dim
                </Button>

                <Button className="tertiary-fixed">tertiary fixed</Button>
                <Button className="tertiary-fixed-dim">
                    tertiary fixed dim
                </Button>
            </div>

            <div className="items" data-slider-orientation="horizontal">
                <div>
                    <RangeSlider className="slider-alt" label="slider alt" />
                </div>

                <div>
                    <Slider
                        className="slider-secondary"
                        label="slider secondary"
                    />
                </div>

                <div>
                    <Slider
                        className="slider-tertiary"
                        label="slider tertiary"
                    />
                </div>

                <div>
                    <RangeSlider
                        className="slider-primary-fixed"
                        label="slider primary fixed"
                    />
                </div>

                <div>
                    <CenteredSlider
                        className="slider-secondary-fixed"
                        label="slider secondary fixed"
                    />
                </div>

                <div>
                    <Slider
                        className="slider-tertiary-fixed"
                        label="slider tertiary fixed"
                    />
                </div>

                <div>
                    <RangeSlider
                        className="slider-inverse"
                        label="slider inverse"
                    />
                </div>
            </div>

            <div className="items">
                <Switch className="switch-primary">switch-primary</Switch>

                <Switch className="switch-primary-alt">
                    switch-primary-alt
                </Switch>

                <Switch className="switch-secondary">switch-secondary</Switch>

                <Switch className="switch-tertiary">switch-tertiary</Switch>

                <Switch className="switch-primary-fixed">
                    switch-primary-fixed
                </Switch>

                <Switch className="switch-secondary-fixed">
                    switch-secondary-fixed
                </Switch>

                <Switch className="switch-inverse">switch-inverse</Switch>
            </div>

            <div className="items">
                <RadioGroup
                    className="radio-primary"
                    label="Primary"
                    containerStateLayer
                >
                    <Radio value="cat">Cat</Radio>
                    <Radio value="dog">Dog</Radio>
                    <Radio value="dragon">Dragon</Radio>
                </RadioGroup>

                <RadioGroup
                    className="radio-primary-alt"
                    label="Primary alt"
                    containerStateLayer
                >
                    <Radio value="cat">Cat</Radio>
                    <Radio value="dog">Dog</Radio>
                    <Radio value="dragon">Dragon</Radio>
                </RadioGroup>

                <RadioGroup
                    className="radio-tertiary"
                    label="Tertiary"
                    containerStateLayer
                >
                    <Radio value="cat">Cat</Radio>
                    <Radio value="dog">Dog</Radio>
                    <Radio value="dragon">Dragon</Radio>
                </RadioGroup>

                <RadioGroup
                    className="radio-primary-fixed"
                    containerStateLayer
                    label="Primary Fixed"
                >
                    <Radio value="cat">Cat</Radio>
                    <Radio value="dog">Dog</Radio>
                    <Radio value="dragon">Dragon</Radio>
                </RadioGroup>

                <RadioGroup
                    className="radio-secondary-fixed"
                    label="Secondary Fixed"
                    containerStateLayer
                >
                    <Radio value="cat">Cat</Radio>
                    <Radio value="dog">Dog</Radio>
                    <Radio value="dragon">Dragon</Radio>
                </RadioGroup>

                <RadioGroup
                    className="radio-inverse"
                    label="Inverse"
                    containerStateLayer
                >
                    <Radio value="cat">Cat</Radio>
                    <Radio value="dog">Dog</Radio>
                    <Radio value="dragon">Dragon</Radio>
                </RadioGroup>
            </div>

            <div className="items">
                <Checkbox className="checkbox-primary" containerStateLayer>
                    Primary checkbox
                </Checkbox>

                <Checkbox className="checkbox-primary-alt" containerStateLayer>
                    Primary alt checkbox
                </Checkbox>

                <Checkbox className="checkbox-tertiary" containerStateLayer>
                    Tertiary checkbox
                </Checkbox>

                <Checkbox
                    className="checkbox-primary-fixed"
                    containerStateLayer
                >
                    Primary fixed checkbox
                </Checkbox>

                <Checkbox
                    className="checkbox-secondary-fixed"
                    containerStateLayer
                >
                    Secondary fixed checkbox
                </Checkbox>

                <Checkbox className="checkbox-inverse" containerStateLayer>
                    Inverse checkbox
                </Checkbox>
            </div>

            <div className="items">
                <Input
                    label="Email"
                    type="text"
                    description="Enter your Adgytec work email"
                    placeholder="username"
                    suffix={"@adgytec.in"}
                    // editorDir="rtl"
                    leadingIcon={Mail}
                    showCharacterCount
                    maxLength={64}
                />

                <Input
                    className="input-primary-alt"
                    label="Email"
                    type="text"
                    description="Enter your Adgytec work email"
                    placeholder="username"
                    suffix={"@adgytec.in"}
                    // editorDir="rtl"
                    leadingIcon={Mail}
                    showCharacterCount
                    maxLength={64}
                />

                <Input
                    className="input-tertiary"
                    label="Email"
                    type="text"
                    description="Enter your Adgytec work email"
                    placeholder="username"
                    suffix={"@adgytec.in"}
                    // editorDir="rtl"
                    leadingIcon={Mail}
                    showCharacterCount
                    maxLength={64}
                />
            </div>

            <div className="items">
                <SplitButtonConfig
                    className="primary"
                    layout="standard"
                    menuClassName="menu-theme-ocean"
                />

                <SplitButtonConfig
                    className="primary-container"
                    layout="grouped"
                    menuClassName="menu-theme-success"
                />

                <SplitButtonConfig
                    className="primary-alt"
                    layout="standard"
                    menuClassName="menu-theme-alt"
                />

                <SplitButtonConfig
                    className="primary-alt-container"
                    layout="grouped"
                    menuClassName="menu-theme-neutral"
                />

                <SplitButtonConfig
                    className="error"
                    layout="standard"
                    menuClassName="menu-theme-error"
                />

                <SplitButtonConfig
                    className="error-container"
                    layout="grouped"
                    menuClassName="menu-theme-inverse"
                />

                <SplitButtonConfig
                    className="secondary"
                    layout="standard"
                    menuClassName="menu-theme-success"
                />

                <SplitButtonConfig
                    className="secondary-container"
                    layout="grouped"
                    menuClassName="menu-theme-ocean"
                />

                <SplitButtonConfig
                    className="tertiary"
                    layout="standard"
                    menuClassName="menu-theme-warning"
                />

                <SplitButtonConfig
                    className="tertiary-container"
                    layout="grouped"
                    menuClassName="menu-theme-neutral"
                />

                <SplitButtonConfig
                    className="inverse"
                    layout="standard"
                    menuClassName="menu-theme-inverse"
                />

                <SplitButtonConfig
                    className="inverse-primary"
                    layout="grouped"
                    menuClassName="menu-theme-ocean"
                />

                <SplitButtonConfig
                    className="primary-fixed"
                    layout="standard"
                    menuClassName="menu-theme-ocean"
                />

                <SplitButtonConfig
                    className="primary-fixed-dim"
                    layout="grouped"
                    menuClassName="menu-theme-success"
                />

                <SplitButtonConfig
                    className="secondary-fixed"
                    layout="standard"
                    menuClassName="menu-theme-success"
                />

                <SplitButtonConfig
                    className="secondary-fixed-dim"
                    layout="grouped"
                    menuClassName="menu-theme-warning"
                />

                <SplitButtonConfig
                    className="tertiary-fixed"
                    layout="standard"
                    menuClassName="menu-theme-warning"
                />

                <SplitButtonConfig
                    className="tertiary-fixed-dim"
                    layout="grouped"
                    menuClassName="menu-theme-error"
                />
            </div>
        </div>
    );
};

export default ConfigPreview;
