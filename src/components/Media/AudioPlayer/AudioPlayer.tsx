import clsx from "clsx";
import { Gauge, Pause, Play, Volume2, VolumeOff } from "lucide-react";
import { FocusScope } from "react-aria";
import { DialogTrigger } from "react-aria-components";
import {
    ConnectedButton,
    ConnectedButtonGroup,
    IconButton,
    ToggleIconButton,
} from "@/components/Button";
import { Popover } from "@/components/Popover";
import { ProgressSlider } from "@/components/ProgressSlider";
import { typography } from "@/utils";
import styles from "./audioPlayer.module.css";

export const AudioPlayer = () => {
    const speeds = [0.5, 0.75, 1, 1.25, 1.5];

    return (
        <div className={clsx(styles["player"])}>
            <ToggleIconButton
                icon={Play}
                selectedIcon={Pause}
                color="standard"
                defaultSelected
                size="extra-small"
            />

            <p className={clsx(styles["duration"], typography.labelLarge)}>
                0 / 1:00
            </p>

            <ProgressSlider
                className={clsx(styles["seek-bar"])}
                defaultValue={40}
            />

            <ToggleIconButton
                icon={VolumeOff}
                selectedIcon={Volume2}
                color="standard"
                defaultSelected
                size="extra-small"
            />

            <DialogTrigger>
                <IconButton icon={Gauge} color="standard" size="extra-small" />

                <Popover className={clsx(styles["popover"])}>
                    <FocusScope autoFocus>
                        <ConnectedButtonGroup
                            color="tonal"
                            selectionMode="single"
                            defaultSelectedKeys={[1]}
                            disallowEmptySelection
                            size="extra-small"
                        >
                            {speeds.map((speed) => (
                                <ConnectedButton key={speed} id={speed}>
                                    {speed}x
                                </ConnectedButton>
                            ))}
                        </ConnectedButtonGroup>
                    </FocusScope>
                </Popover>
            </DialogTrigger>
        </div>
    );
};
