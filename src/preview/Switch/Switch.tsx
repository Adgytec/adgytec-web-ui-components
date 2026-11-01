import { Globe, GlobeOff } from "lucide-react";
import { Switch } from "../../components/Input";

export const SwitchPreview = () => {
    return (
        <>
            <div className="items">
                <Switch isDisabled icon="none">
                    Disabled no icon
                </Switch>

                <Switch isDisabled icon="both">
                    Disabled with icon
                </Switch>

                <Switch isDisabled isSelected>
                    Disabled selected
                </Switch>

                <Switch>Selected icon</Switch>

                <Switch
                    unselectedIcon={GlobeOff}
                    selectedIcon={Globe}
                    icon="both"
                >
                    Custom icon
                </Switch>

                <Switch containerStateLayer icon="both">
                    Both icon
                </Switch>

                <Switch icon="none">Icon none</Switch>
            </div>

            <div className="items-grid">
                <Switch isDisabled icon="none">
                    Disabled no icon
                </Switch>

                <Switch isDisabled icon="both">
                    Disabled with icon
                </Switch>

                <Switch isDisabled isSelected>
                    Disabled selected
                </Switch>

                <Switch>Selected icon</Switch>

                <Switch icon="both" containerStateLayer>
                    Both icon
                </Switch>

                <Switch icon="none">Icon none</Switch>
            </div>
        </>
    );
};

export default SwitchPreview;
