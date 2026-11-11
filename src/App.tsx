import "./styles/app.css";
import type { ReactNode } from "react";
import type { Orientation } from "react-aria";
import { Collection } from "react-aria-components";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "./components/Button";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "./components/Tabs";
import { AppBarPreview } from "./preview/AppBar";
import { BottomSheetPreview } from "./preview/BottomSheet";
import { ButtonPreview } from "./preview/Button";
import { ButtonGroupPreview } from "./preview/ButtonGroup";
import { CalendarPreview } from "./preview/Calendar";
import { CardPreview } from "./preview/Card";
import { CenteredSliderPreview } from "./preview/CenteredSlider";
import { CheckboxPreview } from "./preview/Checkbox";
import { ConfigPreview } from "./preview/Config";
import { ConnectedButtonGroupPreview } from "./preview/ConnectedButtonGroup";
import { DateFieldPreview } from "./preview/DateField";
import { DatePickerPreview } from "./preview/DatePicker";
import { DateRangePickerPreview } from "./preview/DateRangePicker";
import { DecoratorsPreview } from "./preview/Decorators";
import { DialogPreview } from "./preview/Dialog";
import { DisclosurePreview } from "./preview/Disclosure";
import { GradientsPreview } from "./preview/Gradients";
import { IconPreview } from "./preview/Icon";
import { IconButtonPreview } from "./preview/IconButton";
import { InputPreview } from "./preview/Input";
import { LinkPreview } from "./preview/Link";
import { ListPreview } from "./preview/List";
import { LoadingIndicatorPreview } from "./preview/LoadingIndicator";
import { MenuPreview } from "./preview/Menu";
import { NavPreview } from "./preview/Navigation";
import { RadioPreview } from "./preview/Radio";
import { RangeCalendarPreview } from "./preview/RangeCalendar";
import { RangeSliderPreview } from "./preview/RangeSlider";
import { SearchFieldPreview } from "./preview/SearchField";
import { SelectPreview } from "./preview/Select";
import { ShapePreview } from "./preview/Shape";
import { SideSheetPreview } from "./preview/SideSheet";
import { SliderPreview } from "./preview/Slider";
import { SnackbarPreview } from "./preview/Snackbar";
import { SplitButtonPreview } from "./preview/SplitButton";
import { SwitchPreview } from "./preview/Switch";
import { TabsPreview } from "./preview/Tabs";
import { TagsPreview } from "./preview/Tags";
import { TextAreaPreview } from "./preview/TextArea";
import { ThemeSelectorPreview } from "./preview/ThemeSelector";
import { TimeFieldPreview } from "./preview/TimeField";
import { ToolbarPreview } from "./preview/Toolbar";
import { TooltipPreview } from "./preview/Tooltip";
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

const App = () => {
    const [tabOrientation, setOrientation] = useLocalStorage<Orientation>(
        "tab-orientation",
        "horizontal"
    );

    type PreviewItem = {
        id: string;
        label: string;
        Component: React.ComponentType;
    };

    const previewItems: PreviewItem[] = [
        {
            id: "theme-selector",
            label: "Theme Selector",
            Component: ThemeSelectorPreview,
        },

        { id: "disclosure", label: "Disclosure", Component: DisclosurePreview },
        {
            id: "shape",
            label: "Shape",
            Component: ShapePreview,
        },
        {
            id: "loading-indicator",
            label: "Loading indicator",
            Component: LoadingIndicatorPreview,
        },
        {
            id: "list-preview",
            label: "List",
            Component: ListPreview,
        },
        {
            id: "card-preview",
            label: "Card",
            Component: CardPreview,
        },
        {
            id: "decorators-preview",
            label: "Decorators",
            Component: DecoratorsPreview,
        },
        {
            id: "gradient-preview",
            label: "Gradients",
            Component: GradientsPreview,
        },
        {
            id: "navigation-preview",
            label: "Navigation",
            Component: NavPreview,
        },
        {
            id: "app-bar-preview",
            label: "App Bar",
            Component: AppBarPreview,
        },
        {
            id: "snackbar-preview",
            label: "Snackbar",
            Component: SnackbarPreview,
        },
        {
            id: "bottom-sheet-preview",
            label: "Bottom Sheet",
            Component: BottomSheetPreview,
        },
        {
            id: "side-sheet-preview",
            label: "Side Sheet",
            Component: SideSheetPreview,
        },
        {
            id: "search-field",
            label: "Search Field",
            Component: SearchFieldPreview,
        },
        {
            id: "config-preview",
            label: "Config",
            Component: ConfigPreview,
        },

        {
            id: "range-date-picker",
            label: "Date Range Picker",
            Component: DateRangePickerPreview,
        },
        {
            id: "date-picker",
            label: "Date Picker",
            Component: DatePickerPreview,
        },
        {
            id: "range-calendar",
            label: "Range Calendar",
            Component: RangeCalendarPreview,
        },
        {
            id: "calendar",
            label: "Calendar",
            Component: CalendarPreview,
        },
        {
            id: "centered-slider",
            label: "Centered Slider",
            Component: CenteredSliderPreview,
        },
        {
            id: "range-slider",
            label: "Range Slider",
            Component: RangeSliderPreview,
        },
        { id: "slider", label: "Slider", Component: SliderPreview },
        { id: "tags", label: "Tags", Component: TagsPreview },
        { id: "tabs", label: "Tabs", Component: TabsPreview },
        { id: "toolbar", label: "Toolbar", Component: ToolbarPreview },
        { id: "select", label: "Select", Component: SelectPreview },
        { id: "date-field", label: "Date Field", Component: DateFieldPreview },
        { id: "time-field", label: "Time Field", Component: TimeFieldPreview },
        { id: "text-area", label: "Text Area", Component: TextAreaPreview },
        { id: "input", label: "Input", Component: InputPreview },
        { id: "dialog", label: "Dialog", Component: DialogPreview },
        {
            id: "connected-button-group",
            label: "Connected Button Group",
            Component: ConnectedButtonGroupPreview,
        },
        {
            id: "button-group",
            label: "Button Group",
            Component: ButtonGroupPreview,
        },
        {
            id: "split-button",
            label: "Split Button",
            Component: SplitButtonPreview,
        },
        { id: "menu", label: "Menu", Component: MenuPreview },
        { id: "link", label: "Link", Component: LinkPreview },
        { id: "button", label: "Button", Component: ButtonPreview },
        {
            id: "icon-button",
            label: "Icon Button",
            Component: IconButtonPreview,
        },
        { id: "tooltip", label: "Tooltip", Component: TooltipPreview },
        { id: "checkbox", label: "Checkbox", Component: CheckboxPreview },
        { id: "radio", label: "Radio", Component: RadioPreview },
        { id: "icon", label: "Icon", Component: IconPreview },
        { id: "switch", label: "Switch", Component: SwitchPreview },
    ];

    return (
        <div className="tab-container">
            <Tabs orientation={tabOrientation} className="tabs">
                <TabList
                    className="tab-list"
                    style={({ orientation }) => {
                        let pos = {};
                        if (orientation === "horizontal") {
                            pos = {
                                position: "sticky",
                                insetBlockStart: "0",
                                zIndex: "10",
                            };
                        }
                        return { scrollbarWidth: "none", ...pos };
                    }}
                >
                    <Tab id="orientation" label="Tab Orientation" />

                    <Collection items={previewItems}>
                        {(item) => <Tab id={item.id} label={item.label} />}
                    </Collection>
                </TabList>

                <TabPanels>
                    <TabPanel id="orientation">
                        <PreviewContainer label="Tab Orientation">
                            <div className="items">
                                <Button
                                    onPress={() =>
                                        setOrientation((prev) => {
                                            return prev === "horizontal"
                                                ? "vertical"
                                                : "horizontal";
                                        })
                                    }
                                    color="outlined"
                                >
                                    Change Orientation
                                </Button>
                            </div>
                        </PreviewContainer>
                    </TabPanel>

                    <Collection items={previewItems}>
                        {(item) => {
                            const Component = item.Component;

                            return (
                                <TabPanel id={item.id}>
                                    <PreviewContainer label={item.label}>
                                        <Component />
                                    </PreviewContainer>
                                </TabPanel>
                            );
                        }}
                    </Collection>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default App;
