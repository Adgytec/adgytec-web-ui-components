import { Bell, Bookmark, Mail, MessageSquare } from "lucide-react";
import { Badge } from "@/components/Badge";
import {
    IconButton,
    LinkIconButton,
    ToggleIconButton,
} from "@/components/Button";

export const BadgePreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <Badge />

                <Badge count={9} />

                <Badge count={32} />

                <Badge count={1231} />

                <Badge count={50} overflowAt={50} />
            </div>

            <div className="items">
                <IconButton
                    icon={Bell}
                    badge={<Badge count={4} />}
                    aria-label="Notifications"
                />

                <IconButton icon={Bell} aria-label="Notifications" />

                <IconButton
                    icon={Bell}
                    badge={<Badge count={4} />}
                    isPending
                    aria-label="Pending notifications"
                />

                <IconButton
                    icon={Mail}
                    badge={<Badge />}
                    color="tonal"
                    aria-label="Unread mail"
                />

                <ToggleIconButton
                    icon={Bookmark}
                    badge={<Badge count={12} />}
                    color="outlined"
                    aria-label="Bookmarks"
                />

                <LinkIconButton
                    href="#messages"
                    icon={MessageSquare}
                    badge={<Badge count={99} />}
                    color="standard"
                    aria-label="Messages"
                />
            </div>
        </div>
    );
};
