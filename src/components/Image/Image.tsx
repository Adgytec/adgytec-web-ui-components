import type React from "react";
import { ImageSource } from "./ImageSource";
import { ImageVariants } from "./ImageVariants";
import type { ImageProps } from "./types";

export const Image: React.FC<ImageProps> = (props) => {
    if (props.type === "source") {
        return <ImageSource {...props} />;
    }

    return <ImageVariants {...props} />;
};
