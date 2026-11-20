import { Badge } from "@/components/Badge";

export const BadgePreview = () => {
    return (
        <div className="items">
            <Badge />

            <Badge count={32} />

            <Badge count={1231} />

            <Badge count={50} truncateAfter={49} />
        </div>
    );
};
