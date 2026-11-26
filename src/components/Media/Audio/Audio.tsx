import { useState } from "react";
import { useObjectRef } from "react-aria";

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

            <button onClick={togglePlayback} type="button">
                {playing ? "Pause" : "Play"}
            </button>

            <span>{formatTime(currentTime)}</span>

            <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                onChange={(e) => handleSeek(Number(e.target.value))}
            />

            <span>{formatTime(duration)}</span>
        </div>
    );
};
