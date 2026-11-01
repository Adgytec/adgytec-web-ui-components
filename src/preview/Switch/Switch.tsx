import clsx from "clsx";
import { Globe, GlobeOff } from "lucide-react";
import { Heading } from "react-aria-components";
import { typography } from "@/utils";
import { Switch } from "../../components/Input";

export const SwitchPreview = () => {
    return (
        <div className="items-grid">
            <div className="items-grid">
                <Heading
                    className={clsx(typography.titleLarge)}
                    style={{
                        textAlign: "center",
                    }}
                >
                    Normal
                </Heading>

                <div className="items">
                    <Switch isDisabled icon="none" />

                    <Switch />

                    <Switch isDisabled isSelected />
                </div>
            </div>

            <div className="items-grid">
                <Heading
                    className={clsx(typography.titleLarge)}
                    style={{
                        textAlign: "center",
                    }}
                >
                    With Label
                </Heading>

                <div className="items">
                    <Switch
                        unselectedIcon={GlobeOff}
                        selectedIcon={Globe}
                        icon="both"
                    >
                        Custom icon
                    </Switch>

                    <Switch icon="both">Both icon</Switch>

                    <Switch icon="none">No icon</Switch>
                </div>
            </div>
        </div>
    );
};

export default SwitchPreview;
