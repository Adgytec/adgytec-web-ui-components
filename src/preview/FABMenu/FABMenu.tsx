import {
    Camera,
    FileText,
    FolderPlus,
    Plus,
    Sparkles,
    Upload,
} from "lucide-react";
import { useState } from "react";
import {
    FABMenu,
    FABMenuButton,
    FABMenuItem,
    FABMenuPopover,
    FABMenuTrigger,
    type FABSizes,
    type FABVariants,
} from "../../components/Button/FloatingActionButton";
import { typography } from "../../utils";

export const FABMenuPreview = () => {
    const variants: FABVariants[] = ["primary", "secondary", "tertiary"];
    const sizes: FABSizes[] = ["small", "medium", "large"];
    const [lastAction, setLastAction] = useState<string>("None");

    return (
        <div className="items-grid">
            {/* Floating Container Demo (Speed Dial in Context) */}
            <div className="items-grid" style={{ textAlign: "center" }}>
                <h4 className={typography.titleLarge}>
                    In-Context Floating Speed Dial
                </h4>

                <div
                    style={{
                        position: "relative",
                        maxInlineSize: "600px",
                        inlineSize: "100%",
                        blockSize: "300px",
                        marginInline: "auto",
                        border: "1px solid var(--md-sys-color-outline-variant)",
                        borderRadius: "var(--md-sys-shape-corner-radius-large)",
                        padding: "var(--md-sys-layout-space-24)",
                        overflow: "hidden",
                        backgroundColor:
                            "var(--md-sys-color-surface-container-low)",
                        textAlign: "start",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <h5
                            className={typography.titleMedium}
                            style={{ margin: 0 }}
                        >
                            Project Workspace
                        </h5>
                        <p
                            className={typography.bodyMedium}
                            style={{
                                color: "var(--md-sys-color-on-surface-variant)",
                                marginBlockStart: "8px",
                            }}
                        >
                            Click the floating action button at the bottom-right
                            corner to expand quick creation options.
                        </p>
                    </div>

                    <div style={{ alignSelf: "flex-end" }}>
                        <FABMenuTrigger variant="primary">
                            <FABMenuButton
                                icon={Sparkles}
                                tooltip="Quick Actions"
                                aria-label="Quick Actions"
                            />

                            <FABMenuPopover>
                                <FABMenu
                                    onAction={(key) =>
                                        setLastAction(
                                            `Floating speed dial: ${key}`
                                        )
                                    }
                                >
                                    <FABMenuItem id="ai" icon={Sparkles}>
                                        Generate with AI
                                    </FABMenuItem>
                                    <FABMenuItem id="task" icon={FolderPlus}>
                                        Create Task
                                    </FABMenuItem>
                                    <FABMenuItem id="file" icon={FileText}>
                                        Add Document
                                    </FABMenuItem>
                                </FABMenu>
                            </FABMenuPopover>
                        </FABMenuTrigger>
                    </div>
                </div>
            </div>

            {/* Status Feedback */}
            <div style={{ textAlign: "center" }}>
                <h3 className={typography.headlineSmall}>FAB Menu</h3>
                <p
                    className={typography.bodyMedium}
                    style={{ color: "var(--md-sys-color-on-surface-variant)" }}
                >
                    Last selected action: <strong>{lastAction}</strong>
                </p>
            </div>

            {/* Variants and Sizes Grid */}
            {variants.map((variant) => (
                <div
                    key={`fab-menu-${variant}`}
                    className="items-grid"
                    style={{ textAlign: "center" }}
                >
                    <h4 className={typography.titleLarge}>{variant} Variant</h4>

                    <div className="items">
                        {sizes.map((size) => (
                            <FABMenuTrigger key={size} variant={variant}>
                                <FABMenuButton
                                    icon={Plus}
                                    size={size}
                                    tooltip={`Open menu (${variant} ${size})`}
                                    aria-label={`Open menu (${variant} ${size})`}
                                />

                                <FABMenuPopover>
                                    <FABMenu
                                        onAction={(key) =>
                                            setLastAction(
                                                `${variant} (${size}) -> ${key}`
                                            )
                                        }
                                    >
                                        <FABMenuItem
                                            id="document"
                                            icon={FileText}
                                        >
                                            Document
                                        </FABMenuItem>

                                        <FABMenuItem id="photo" icon={Camera}>
                                            Take Photo
                                        </FABMenuItem>

                                        <FABMenuItem id="upload" icon={Upload}>
                                            Upload File
                                        </FABMenuItem>
                                    </FABMenu>
                                </FABMenuPopover>
                            </FABMenuTrigger>
                        ))}
                    </div>
                </div>
            ))}

            <div
                style={{
                    paddingBlock: "10rem",
                }}
            >
                sample space for last item proper opening in mobile preview
            </div>
        </div>
    );
};
