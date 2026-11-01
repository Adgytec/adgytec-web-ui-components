import { ExternalLinkIcon } from "lucide-react";
import { LinkButton, LinkIconButton } from "../../components/Button";

export const LinkPreview = () => {
    return (
        <div className="items">
            <LinkButton
                href="https://m3.material.io"
                target="_blank"
                color="elevated"
            >
                Material 3
            </LinkButton>

            <LinkIconButton
                href="https://m3.material.io"
                target="_blank"
                icon={ExternalLinkIcon}
                color="standard"
            />
        </div>
    );
};

export default LinkPreview;
