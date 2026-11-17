import { Navigation, Pencil, Plus, Share2 } from "lucide-react";
import {
    ExtendedFloatingActionButton,
    type FABColors,
    type FABSizes,
    type FABVariants,
    FloatingActionButton,
} from "../../components/Button/FloatingActionButton";
import { typography } from "../../utils";

export const FABPreview = () => {
    const sizes: FABSizes[] = ["small", "medium", "large"];
    const variants: FABVariants[] = ["primary", "secondary", "tertiary"];
    const colors: FABColors[] = ["filled", "tonal"];

    return (
        <div className="items-grid">
            {/* FloatingActionButton */}
            {colors.map((color) => (
                <div
                    key={`fab-${color}`}
                    className="items-grid"
                    style={{
                        textAlign: "center",
                    }}
                >
                    <h3 className={typography.headlineSmall}>FAB — {color}</h3>

                    {variants.map((variant) => (
                        <div key={variant} className="items-grid">
                            <h4 className={typography.titleLarge}>{variant}</h4>

                            <div className="items">
                                {sizes.map((size) => (
                                    <FloatingActionButton
                                        key={size}
                                        color={color}
                                        variant={variant}
                                        size={size}
                                        icon={Plus}
                                        tooltip={`FAB ${size}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            {/* ExtendedFloatingActionButton */}
            {colors.map((color) => (
                <div
                    key={`extended-fab-${color}`}
                    className="items-grid"
                    style={{
                        textAlign: "center",
                    }}
                >
                    <h3 className={typography.headlineSmall}>
                        Extended FAB — {color}
                    </h3>

                    {variants.map((variant) => (
                        <div key={variant} className="items-grid">
                            <h4 className={typography.titleLarge}>{variant}</h4>

                            {sizes.map((size) => (
                                <div className="items" key={size}>
                                    <ExtendedFloatingActionButton
                                        color={color}
                                        variant={variant}
                                        size={size}
                                        icon={Pencil}
                                        iconPlacement="start"
                                    >
                                        {size}
                                    </ExtendedFloatingActionButton>

                                    <ExtendedFloatingActionButton
                                        color={color}
                                        variant={variant}
                                        size={size}
                                        icon={Share2}
                                        iconPlacement="end"
                                    >
                                        Share
                                    </ExtendedFloatingActionButton>

                                    <ExtendedFloatingActionButton
                                        color={color}
                                        variant={variant}
                                        size={size}
                                    >
                                        No Icon
                                    </ExtendedFloatingActionButton>

                                    <ExtendedFloatingActionButton
                                        color={color}
                                        variant={variant}
                                        size={size}
                                        icon={Navigation}
                                        isDisabled
                                    >
                                        Disabled
                                    </ExtendedFloatingActionButton>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
