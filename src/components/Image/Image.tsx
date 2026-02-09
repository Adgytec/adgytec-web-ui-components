import type React from "react";
import type { ImageProps } from "./types";
import { ImageSource } from "./ImageSource";
import { ImageVariants } from "./ImageVariants";

export const Image: React.FC<ImageProps> = (props) => {
    if (props.type === "source") {
        return <ImageSource {...props} />;
    }

    return <ImageVariants {...props} />;
};
