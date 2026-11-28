import { AudioPlayer } from "@/components/Media";

export const AudioPreview = () => {
    return (
        <div className="items-grid">
            <AudioPlayer
                label="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
                {(ref) => (
                    <audio
                        ref={ref}
                        src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                    />
                )}
            </AudioPlayer>

            <AudioPlayer
                label="Lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
                {(ref) => (
                    <audio
                        ref={ref}
                        src="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
                    />
                )}
            </AudioPlayer>
        </div>
    );
};
