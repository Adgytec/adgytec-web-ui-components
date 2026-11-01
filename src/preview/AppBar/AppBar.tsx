import clsx from "clsx";
import { Bell, CloudSnow, Palette, Settings } from "lucide-react";
import {
    AppBar,
    AppBarAction,
    AppBarAvatar,
    AppBarHeadline,
    AppBarState,
} from "../../components/AppBar";
import { typography } from "../../utils/typography";

export const AppBarPreview = () => {
    return (
        <div className="items-grid">
            <div>
                <h3 className={clsx(typography.titleLargeEmphasized)}>
                    App Bar comps
                </h3>

                <div className="items">
                    <AppBarAction icon={Bell} />

                    <AppBarAvatar>R</AppBarAvatar>

                    <AppBarAvatar>RRRR</AppBarAvatar>

                    <AppBarAvatar>
                        <img
                            src="https://picsum.photos/seed/appbar-avatar/32"
                            alt="random"
                        />
                    </AppBarAvatar>
                </div>
            </div>

            <div>
                <h3 className={clsx(typography.titleLargeEmphasized)}>
                    App Bar
                </h3>

                <div className="items-grid app-bar">
                    <AppBar
                        leadingAction={<AppBarAction icon={CloudSnow} />}
                        trailingActions={[
                            <AppBarAction
                                key="settings"
                                icon={Settings}
                                data-app-bar-trailing-action
                            />,
                            <AppBarAvatar key="avatar" data-app-bar-avatar>
                                R
                            </AppBarAvatar>,
                        ]}
                        headline={<AppBarHeadline>Material 3</AppBarHeadline>}
                    />

                    <AppBar
                        alignment="centered"
                        leadingAction={<AppBarAction icon={CloudSnow} />}
                        trailingActions={[
                            <AppBarAction key="settings" icon={Settings} />,
                            <AppBarAvatar key="avatar">
                                <img
                                    src="https://picsum.photos/seed/appbar-eg/32"
                                    alt="random"
                                />
                            </AppBarAvatar>,
                        ]}
                        headline={<AppBarHeadline>Material 3</AppBarHeadline>}
                    />

                    <AppBar
                        size="medium"
                        leadingAction={<AppBarAction icon={CloudSnow} />}
                        trailingActions={[
                            <AppBarAction
                                key="settings"
                                icon={Settings}
                                data-app-bar-trailing-action
                            />,
                            <AppBarAvatar key="avatar" data-app-bar-avatar>
                                R
                            </AppBarAvatar>,
                        ]}
                        headline={<AppBarHeadline>Material 3</AppBarHeadline>}
                    />

                    <AppBar
                        size="medium"
                        alignment="centered"
                        leadingAction={<AppBarAction icon={CloudSnow} />}
                        trailingActions={[
                            <AppBarAction key="settings" icon={Settings} />,
                            <AppBarAvatar key="avatar">
                                <img
                                    src="https://picsum.photos/seed/appbar-medium-eg/32"
                                    alt="random"
                                />
                            </AppBarAvatar>,
                        ]}
                        headline={<AppBarHeadline>Material 3</AppBarHeadline>}
                    />

                    <AppBar
                        size="large"
                        leadingAction={<AppBarAction icon={CloudSnow} />}
                        trailingActions={[
                            <AppBarAction key="settings" icon={Settings} />,
                            <AppBarAvatar key="avatar">R</AppBarAvatar>,
                        ]}
                        headline={<AppBarHeadline>Material 3</AppBarHeadline>}
                    />

                    <AppBarState initialScrolling>
                        <AppBar
                            size="large"
                            alignment="centered"
                            leadingAction={<AppBarAction icon={CloudSnow} />}
                            trailingActions={[
                                <AppBarAction key="settings" icon={Settings} />,
                                <AppBarAvatar key="avatar">
                                    <img
                                        src="https://picsum.photos/seed/appbar-initial/32"
                                        alt="random"
                                    />
                                </AppBarAvatar>,
                            ]}
                            headline={
                                <AppBarHeadline>Material 3</AppBarHeadline>
                            }
                        />

                        <AppBar
                            size="large"
                            alignment="centered"
                            leadingAction={<AppBarAction icon={CloudSnow} />}
                            trailingActions={[
                                <AppBarAction key="settings" icon={Settings} />,
                                <AppBarAction key="theme" icon={Palette} />,
                            ]}
                            headline={
                                <AppBarHeadline>Material 3</AppBarHeadline>
                            }
                        />
                    </AppBarState>
                </div>
            </div>
        </div>
    );
};

export default AppBarPreview;
