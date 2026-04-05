// TODO: replace with simple implementation
// Server response will also be changed to only include 5 variants
// original, thumbnail, medium, large, extralarge
// no source type will be there

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
