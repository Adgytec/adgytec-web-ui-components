import clsx from "clsx";
import {
    AudioLinesX,
    Gauge,
    Pause,
    Play,
    RefreshCcw,
    Volume2,
    VolumeOff,
} from "lucide-react";
import { useRef, useState } from "react";
import { FocusScope } from "react-aria";
import { DialogTrigger } from "react-aria-components";
import {
    Button,
    ButtonGroup,
    ConnectedButton,
    ConnectedButtonGroup,
    ToggleIconButton,
} from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Slider } from "@/components/Input";
import { Popover } from "@/components/Popover";
import { CircularProgressIndicator } from "@/components/ProgressIndicator";
import { ProgressSlider } from "@/components/ProgressSlider";
import { typography } from "@/utils";
import {
    formatTime,
    showProgressIndicator,
    useHTMLMediaPlayback,
} from "../core";
import styles from "./audioPlayer.module.css";
import {
    type AudioPlayerProps,
    DEFAULT_PLAYBACK_RATES,
    NO_LABELS,
} from "./types";

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
    label,
    description,
    playbackRates = DEFAULT_PLAYBACK_RATES,
    controlLabels: labels = NO_LABELS,
    children,
}) => {
    const ref = useRef<HTMLAudioElement | null>(null);
    const playback = useHTMLMediaPlayback(ref);

    const [scrubTime, setScrubTime] = useState<number | null>(null);

    const showInfo = label || description;

    const playPauseLabel = playback.ended
        ? (labels.replay ?? labels.playPause)
        : labels.playPause;

    return (
        <>
            {children(ref)}

            <div className={clsx(styles["player"])}>
                <div className={clsx(styles["header"])}>
                    <ButtonGroup>
                        <ToggleIconButton
                            size="medium"
                            color="standard"
                            icon={playback.ended ? RefreshCcw : Play}
                            selectedIcon={Pause}
                            isSelected={!playback.paused}
                            onPress={async () => {
                                await playback.togglePlayPause();
                            }}
                            width="narrow"
                            tooltip={playPauseLabel}
                            aria-label={playPauseLabel}
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

                    {showProgressIndicator(playback.status) && (
                        <CircularProgressIndicator
                            wavy={false}
                            isIndeterminate
                            size={32}
                            aria-label={labels.loading}
                            className={clsx(styles["indicator"])}
                        />
                    )}

                    {playback.status === "error" && (
                        <Icon
                            className={clsx(styles["indicator"])}
                            icon={AudioLinesX}
                            data-error
                            {...(labels.error
                                ? { role: "img", "aria-label": labels.error }
                                : {})}
                        />
                    )}
                </div>

                <div className={clsx(styles["actions"])}>
                    <div className={clsx(styles["seeker"])}>
                        <ProgressSlider
                            className={clsx(styles["seeker"])}
                            aria-label={labels.seek}
                            minValue={0}
                            maxValue={playback.duration}
                            value={scrubTime ?? playback.currentTime}
                            bufferedRanges={playback.buffered}
                            wavy={!playback.paused}
                            isDisabled={
                                !playback.duration &&
                                playback.status === "error"
                            }
                            onChange={setScrubTime}
                            onChangeEnd={(time) => {
                                playback.seekTo(time);
                                setScrubTime(null);
                            }}
                            formatOptions={{
                                style: "unit",
                                unit: "second",
                                unitDisplay: "long",
                                maximumFractionDigits: 0,
                            }}
                        />

                        <div
                            className={clsx(
                                styles["duration"],
                                typography.labelMedium
                            )}
                        >
                            <p>
                                {formatTime(scrubTime ?? playback.currentTime)}
                            </p>

                            {Number.isFinite(playback.duration) && (
                                <p>{formatTime(playback.duration)}</p>
                            )}
                        </div>
                    </div>

                    <div className={clsx(styles["media-controls"])}>
                        <DialogTrigger>
                            <Button
                                className={clsx(styles["playback-trigger"])}
                                icon={Gauge}
                                color="text"
                                size="extra-small"
                                tooltip={labels.playbackRate}
                                aria-label={labels.playbackRate}
                            >
                                {playback.playbackRate}x
                            </Button>

                            <Popover className={clsx(styles["playback"])}>
                                <FocusScope autoFocus>
                                    <ConnectedButtonGroup
                                        disallowEmptySelection
                                        selectedKeys={[playback.playbackRate]}
                                        onSelectionChange={(keys) => {
                                            const [rate] = keys;
                                            if (!rate) return;
                                            playback.setPlaybackRate(
                                                Number(rate)
                                            );
                                        }}
                                        size="extra-small"
                                    >
                                        {playbackRates.map((speed) => (
                                            <ConnectedButton
                                                key={speed}
                                                id={speed}
                                            >
                                                {speed}x
                                            </ConnectedButton>
                                        ))}
                                    </ConnectedButtonGroup>
                                </FocusScope>
                            </Popover>
                        </DialogTrigger>

                        <div className={clsx(styles["volume"])}>
                            <ToggleIconButton
                                color="standard"
                                icon={VolumeOff}
                                selectedIcon={Volume2}
                                isSelected={!playback.muted}
                                onPress={() => playback.toggleMuteUnmute()}
                                size="extra-small"
                                width="wide"
                                tooltip={labels.muteUnmute}
                                aira-label={labels.muteUnmute}
                            />

                            <Slider
                                aria-label={labels.volume}
                                isDisabled={playback.muted}
                                className={clsx(styles["volume-slider"])}
                                size="extra-small"
                                minValue={0}
                                maxValue={1}
                                step={0.01}
                                showInBetweenSteps={false}
                                formatOptions={{ style: "percent" }}
                                value={playback.volume}
                                onChange={playback.setVolume}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
