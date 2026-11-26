import { AudioPlayer } from "@/components/Media";

export const AudioPreview = () => {
    return (
        <div className="items-grid">
            <div>
                <AudioPlayer />
            </div>

            <div>
                <audio
                    src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                    controls
                />
            </div>
        </div>
    );
};
