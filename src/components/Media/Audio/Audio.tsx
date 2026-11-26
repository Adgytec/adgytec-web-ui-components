import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { useObjectRef } from "react-aria";
import {
    ConnectedButton,
    ConnectedButtonGroup,
    IconButton,
} from "@/components/Button";
import { Slider } from "@/components/Input";
import { ProgressSlider } from "@/components/ProgressSlider";

export const Audio: React.FC<React.ComponentPropsWithRef<"audio">> = ({
    ref,
    onPlay,
    onPause,
    onEnded,
    onTimeUpdate,
    onLoadedMetadata,
    ...props
}) => {
    const audioRef = useObjectRef(ref);

    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);

    const playbackRates = [0.5, 0.75, 1, 1.25, 1.5];

    const [playbackRate, setPlaybackRate] = useState(1);

    const handlePlaybackRateChange = (value: number) => {
        if (!audioRef.current) return;

        audioRef.current.playbackRate = value;
        setPlaybackRate(value);
    };

    const togglePlayback = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            await audio.play();
        } else {
            audio.pause();
        }
    };

    const handleSeek = (value: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
    };

    const handleVolumeChange = (value: number) => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = value;
        audio.muted = value === 0;

        setVolume(value);
        setMuted(value === 0);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        const nextMuted = !audio.muted;

        audio.muted = nextMuted;
        setMuted(nextMuted);
    };

    const formatTime = (time: number) => {
        if (!Number.isFinite(time)) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div>
            <audio
                {...props}
                ref={audioRef}
                onPlay={(e) => {
                    setPlaying(true);
                    onPlay?.(e);
                }}
                onPause={(e) => {
                    setPlaying(false);
                    onPause?.(e);
                }}
                onEnded={(e) => {
                    setPlaying(false);
                    onEnded?.(e);
                }}
                onTimeUpdate={(e) => {
                    setCurrentTime(e.currentTarget.currentTime);
                    onTimeUpdate?.(e);
                }}
                onLoadedMetadata={(e) => {
                    setDuration(e.currentTarget.duration);
                    onLoadedMetadata?.(e);
                }}
            />

            <IconButton
                color="tonal"
                onPress={togglePlayback}
                icon={playing ? Pause : Play}
            />

            <span>{formatTime(currentTime)}</span>

            <ProgressSlider
                minValue={0}
                maxValue={duration || 0}
                step={1}
                value={currentTime}
                onChange={handleSeek}
                wavy={playing}
            />

            <span>{formatTime(duration)}</span>

            <IconButton
                color="tonal"
                onPress={toggleMute}
                icon={muted || volume === 0 ? VolumeX : Volume2}
            />

            <Slider
                minValue={0}
                maxValue={1}
                step={0.01}
                value={muted ? 0 : volume}
                onChange={handleVolumeChange}
                size="extra-small"
                formatOptions={{
                    style: "percent",
                }}
            />

            <ConnectedButtonGroup>
                {playbackRates.map((rate) => (
                    <ConnectedButton
                        key={rate}
                        isSelected={playbackRate === rate}
                        onPress={() => handlePlaybackRateChange(rate)}
                        aria-pressed={playbackRate === rate}
                    >
                        {rate}x
                    </ConnectedButton>
                ))}
            </ConnectedButtonGroup>
        </div>
    );
};
