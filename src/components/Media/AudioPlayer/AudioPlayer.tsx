import clsx from "clsx";
import { Gauge, Pause, Play, Volume2, VolumeOff } from "lucide-react";
import { DialogTrigger } from "react-aria-components";
import {
    Button,
    ButtonGroup,
    ConnectedButton,
    ConnectedButtonGroup,
    ToggleIconButton,
} from "@/components/Button";
import { Slider } from "@/components/Input";
import { Popover } from "@/components/Popover";
import { CircularProgressIndicator } from "@/components/ProgressIndicator";
import { ProgressSlider } from "@/components/ProgressSlider";
import { typography } from "@/utils";
import styles from "./audioPlayer.module.css";

export const AudioPlayer = () => {
    const speeds = [0.5, 0.75, 1, 1.25, 1.5];

    const label = "Audio label";
    const description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    const showInfo = label || description;

    return (
        <div className={clsx(styles["player"])}>
            <div className={clsx(styles["header"])}>
                <ButtonGroup>
                    <ToggleIconButton
                        size="medium"
                        color="standard"
                        icon={Play}
                        selectedIcon={Pause}
                        defaultSelected
                        width="narrow"
                        tooltip="Play / Pause"
                    />
                </ButtonGroup>

                {showInfo && (
                    <div className={clsx(styles["info"])}>
                        {label && (
                            <p
                                className={clsx(
                                    styles["label"],
                                    typography.titleMediumEmphasized
                                )}
                            >
                                {label}
                            </p>
                        )}

                        {description && (
                            <p className={clsx(typography.bodyMedium)}>
                                {description}
                            </p>
                        )}
                    </div>
                )}

                <CircularProgressIndicator
                    wavy={false}
                    isIndeterminate
                    size={32}
                    className={clsx(styles["progress-indicator"])}
                />
            </div>

            <div className={clsx(styles["actions"])}>
                <div className={clsx(styles["seeker"])}>
                    <ProgressSlider
                        className={clsx(styles["seeker"])}
                        defaultValue={33}
                        bufferedRanges={[{ start: 0, end: 60 }]}
                    />

                    <div
                        className={clsx(
                            styles["duration"],
                            typography.labelMedium
                        )}
                    >
                        <p>0:33</p>

                        <p>5:32</p>
                    </div>
                </div>

                <div className={clsx(styles["media-controls"])}>
                    <DialogTrigger>
                        <Button
                            className={clsx(styles["playback-trigger"])}
                            icon={Gauge}
                            color="text"
                            size="extra-small"
                            tooltip="Playback"
                        >
                            1x
                        </Button>

                        <Popover className={clsx(styles["playback"])}>
                            <ConnectedButtonGroup
                                disallowEmptySelection
                                defaultSelectedKeys={[1]}
                                size="extra-small"
                            >
                                {speeds.map((speed) => (
                                    <ConnectedButton key={speed} id={speed}>
                                        {speed}x
                                    </ConnectedButton>
                                ))}
                            </ConnectedButtonGroup>
                        </Popover>
                    </DialogTrigger>

                    <div className={clsx(styles["volume"])}>
                        <ToggleIconButton
                            color="standard"
                            icon={VolumeOff}
                            selectedIcon={Volume2}
                            defaultSelected
                            size="extra-small"
                            width="wide"
                            tooltip="Mute / Unmute"
                        />

                        <Slider
                            className={clsx(styles["volume-slider"])}
                            size="extra-small"
                            defaultValue={44}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
