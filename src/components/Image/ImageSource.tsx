import type React from "react";
import type { ImageSourceProps } from "./types";

export const ImageSource: React.FC<ImageSourceProps> = ({ src, ...props }) => {
    return <img src={src} {...props} />;
};
