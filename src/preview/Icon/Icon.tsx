import { FileBraces } from "lucide-react";
import { Icon } from "../../components/Icon";

export const IconPreview = () => {
    return (
        <>
            <Icon icon={FileBraces} size={400} withText />

            <p
                style={{
                    fontSize: "5rem",
                    fontWeight: "400",
                }}
            >
                <Icon icon={FileBraces} withText strokeWidth={1.375} /> with
                text
            </p>
        </>
    );
};

export default IconPreview;
