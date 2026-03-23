import type React from "react";
import type { ImageSourceProps } from "./types";

export const ImageSource: React.FC<ImageSourceProps> = ({
    src,
    alt = "image",
    ...props
}) => {
    return <img src={src} {...props} alt={alt} />;
};
