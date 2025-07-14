import {
  AvatarSize,
  AvatarType,
  type AvatarBaseProps,
  type AvatarProps,
} from "./types";
import styles from "./avatar.module.css";
import { ColorTheme } from "../../utils/types";

const AvatarBase = ({ children, size, type, theme }: AvatarBaseProps) => {
  return (
    <div
      className={`${styles["avatar"]} ${styles[size]} ${styles[type]} ${styles[theme]}`}
    >
      {children}
    </div>
  );
};

export const Avatar = ({
  src,
  children,
  size = AvatarSize.normal,
  label,
  theme = ColorTheme.primary,
}: AvatarProps) => {
  if (children) {
    return (
      <AvatarBase type={AvatarType.node} size={size} theme={theme}>
        {children}
      </AvatarBase>
    );
  }

  return (
    <AvatarBase size={size} type={AvatarType.image} theme={theme}>
      <img src={src} alt={label} />
    </AvatarBase>
  );
};
