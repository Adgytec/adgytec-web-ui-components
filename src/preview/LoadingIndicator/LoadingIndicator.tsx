import { LoadingIndicator } from "@/components/LoadingIndicator";

export const LoadingIndicatorPreview = () => {
    const sizes = [24, 32, 40, 48, 64, 80, 96, 120, 160, 200, 240];

    return (
        <div className="items-grid">
            {sizes.map((size) => (
                <div key={size} className="items">
                    <LoadingIndicator size={size} />

                    <LoadingIndicator size={size} containment="contained" />
                </div>
            ))}
        </div>
    );
};
