import { Badge } from "@/components/Badge";

export const BadgePreview = () => {
    return (
        <div className="items">
            <Badge />

            <Badge count={9} />

            <Badge count={32} />

            <Badge count={1231} />

            <Badge count={50} overflowAt={50} />
        </div>
    );
};
