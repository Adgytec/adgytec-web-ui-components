import {
    Camera,
    FileText,
    FolderPlus,
    Image,
    Pencil,
    Plus,
    Share2,
    Sparkles,
    Trash2,
    Upload,
    UserPlus,
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
            {/* Status Feedback */}
            <div style={{ textAlign: "center" }}>
                <h3 className={typography.headlineSmall}>
                    FAB Menu (Speed Dial)
                </h3>
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

            {/* Placements & States */}
            <div className="items-grid" style={{ textAlign: "center" }}>
                <h4 className={typography.titleLarge}>
                    Placements & Item States
                </h4>

                <div className="items">
                    {/* Top End (Default upward speed dial) */}
                    <div style={{ textAlign: "center" }}>
                        <p
                            className={typography.bodyMedium}
                            style={{ marginBlockEnd: "8px" }}
                        >
                            Top End (Default)
                        </p>
                        <FABMenuTrigger variant="primary">
                            <FABMenuButton
                                icon={Pencil}
                                tooltip="Top End Placement"
                                aria-label="Top End Placement"
                            />
                            <FABMenuPopover placement="top end">
                                <FABMenu
                                    onAction={(key) =>
                                        setLastAction(`Top End: ${key}`)
                                    }
                                >
                                    <FABMenuItem id="edit" icon={Pencil}>
                                        Edit Note
                                    </FABMenuItem>
                                    <FABMenuItem id="share" icon={Share2}>
                                        Share
                                    </FABMenuItem>
                                    <FABMenuItem
                                        id="delete"
                                        icon={Trash2}
                                        isDisabled
                                    >
                                        Delete (Disabled)
                                    </FABMenuItem>
                                </FABMenu>
                            </FABMenuPopover>
                        </FABMenuTrigger>
                    </div>

                    {/* Top Start */}
                    <div style={{ textAlign: "center" }}>
                        <p
                            className={typography.bodyMedium}
                            style={{ marginBlockEnd: "8px" }}
                        >
                            Top Start
                        </p>
                        <FABMenuTrigger variant="secondary">
                            <FABMenuButton
                                icon={FolderPlus}
                                tooltip="Top Start Placement"
                                aria-label="Top Start Placement"
                            />
                            <FABMenuPopover placement="top start">
                                <FABMenu
                                    onAction={(key) =>
                                        setLastAction(`Top Start: ${key}`)
                                    }
                                >
                                    <FABMenuItem id="folder" icon={FolderPlus}>
                                        New Folder
                                    </FABMenuItem>
                                    <FABMenuItem id="media" icon={Image}>
                                        Add Media
                                    </FABMenuItem>
                                </FABMenu>
                            </FABMenuPopover>
                        </FABMenuTrigger>
                    </div>

                    {/* Bottom End (Downward expansion) */}
                    <div style={{ textAlign: "center" }}>
                        <p
                            className={typography.bodyMedium}
                            style={{ marginBlockEnd: "8px" }}
                        >
                            Bottom End
                        </p>
                        <FABMenuTrigger variant="tertiary">
                            <FABMenuButton
                                icon={UserPlus}
                                tooltip="Bottom End Placement"
                                aria-label="Bottom End Placement"
                            />
                            <FABMenuPopover placement="bottom end">
                                <FABMenu
                                    onAction={(key) =>
                                        setLastAction(`Bottom End: ${key}`)
                                    }
                                >
                                    <FABMenuItem id="user" icon={UserPlus}>
                                        Invite Member
                                    </FABMenuItem>
                                    <FABMenuItem id="upload" icon={Upload}>
                                        Import Contacts
                                    </FABMenuItem>
                                </FABMenu>
                            </FABMenuPopover>
                        </FABMenuTrigger>
                    </div>
                </div>
            </div>

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
                            <FABMenuPopover placement="top end">
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
        </div>
    );
};
