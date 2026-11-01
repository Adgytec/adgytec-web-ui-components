import { Bell, SwatchBook, UserRound } from "lucide-react";
import type { Orientation } from "react-aria";
import { Form } from "react-aria-components";
import { Button } from "../../components/Button";
import {
    Checkbox,
    CheckboxGroup,
    Input,
    Radio,
    RadioGroup,
} from "../../components/Input";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "../../components/Tabs";

export const RenderTabs = ({
    isDisabled,
    orientation,
}: {
    isDisabled?: boolean;
    orientation?: Orientation;
}) => {
    return (
        <Tabs
            keyboardActivation="manual"
            orientation={orientation}
            style={{
                padding: "var(--md-sys-layout-space-28)",
                borderRadius: "var(--md-sys-shape-corner-radius-large)",
                outline:
                    "var(--md-sys-shape-border-width-thin) solid var(--md-sys-color-outline)",
            }}
        >
            <TabList
                aria-label="Settings"
                style={{
                    scrollbarWidth: "none",
                }}
            >
                <Tab
                    id="general"
                    label="General"
                    icon={SwatchBook}
                    isDisabled={isDisabled}
                />
                <Tab
                    id="appearance"
                    label="Appearance"
                    isDisabled={isDisabled}
                />
                <Tab
                    id="notifications"
                    label="Notifications"
                    icon={Bell}
                    isDisabled={isDisabled}
                />
                <Tab
                    id="profile"
                    label="Profile"
                    icon={UserRound}
                    isDisabled={isDisabled}
                />
            </TabList>
            <TabPanels>
                <TabPanel id="general">
                    <Form
                        style={{
                            display: "grid",
                            gap: "1.5rem",
                        }}
                    >
                        <Input
                            label="Homepage"
                            defaultValue="react-aria.adobe.com"
                        />
                        <Checkbox containerStateLayer defaultSelected>
                            Show sidebar
                        </Checkbox>
                        <Checkbox containerStateLayer>Show status bar</Checkbox>
                    </Form>
                </TabPanel>
                <TabPanel id="appearance">
                    <Form
                        style={{
                            display: "grid",
                            gap: "1.5rem",
                        }}
                    >
                        <RadioGroup
                            containerStateLayer
                            label="Theme"
                            defaultValue="auto"
                        >
                            <Radio value="auto">Auto</Radio>
                            <Radio value="light">Light</Radio>
                            <Radio value="dark">Dark</Radio>
                        </RadioGroup>
                        <RadioGroup
                            containerStateLayer
                            label="Font size"
                            defaultValue="medium"
                        >
                            <Radio value="small">Small</Radio>
                            <Radio value="medium">Medium</Radio>
                            <Radio value="large">Large</Radio>
                        </RadioGroup>
                    </Form>
                </TabPanel>
                <TabPanel id="notifications">
                    <CheckboxGroup
                        containerStateLayer
                        label="Notifications settings"
                        defaultValue={["account", "dms"]}
                    >
                        <Checkbox value="account">Account activity</Checkbox>
                        <Checkbox value="mentions">Mentions</Checkbox>
                        <Checkbox value="dms">Direct message</Checkbox>
                        <Checkbox value="marketing">Marketing emails</Checkbox>
                    </CheckboxGroup>
                </TabPanel>
                <TabPanel id="profile">
                    <Form
                        style={{
                            display: "grid",
                            gap: "1.5rem",
                        }}
                    >
                        <Input label="Name" defaultValue="Devon Govett" />
                        <Input label="Username" defaultValue="@devongovett" />
                        <Button>Update profile</Button>
                    </Form>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export const TabsPreview = () => {
    return (
        <div className="items">
            <RenderTabs />

            <RenderTabs orientation="vertical" />

            <RenderTabs isDisabled />

            <RenderTabs isDisabled orientation="vertical" />
        </div>
    );
};

export default TabsPreview;
