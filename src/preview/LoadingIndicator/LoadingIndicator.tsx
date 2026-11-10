import { LoadingIndicator } from "@/components/LoadingIndicator";

export const LoadingIndicatorPreview = () => {
    const sizes = [24, 32, 40, 48, 64, 80, 96, 120, 160, 200, 240];

    return (
        <div className="items-grid">
            {sizes.map((size) => (
                <div
                    key={size}
                    className="items"
                    style={{ textAlign: "center" }}
                >
                    <div>
                        <LoadingIndicator size={size} />

                        <LoadingIndicator size={size} containment="contained" />
                    </div>

                    <div className="loading-indicator-primary-alt">
                        <LoadingIndicator size={size} />

                        <span data-contained>
                            <LoadingIndicator
                                size={size}
                                containment="contained"
                            />
                        </span>
                    </div>

                    <div className="loading-indicator-tertiary">
                        <LoadingIndicator size={size} />

                        <span data-contained>
                            <LoadingIndicator
                                size={size}
                                containment="contained"
                            />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};
