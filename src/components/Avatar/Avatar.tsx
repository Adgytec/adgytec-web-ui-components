import type { AvatarBaseProps, AvatarProps } from "./types";
import styles from "./avatar.module.css";

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
  size = "normal",
  label,
  theme = "primary",
}: AvatarProps) => {
  if (children) {
    return (
      <AvatarBase type="node" size={size} theme={theme}>
        {children}
      </AvatarBase>
    );
  }

  return (
    <AvatarBase size={size} type="image" theme={theme}>
      <img src={src} alt={label} />
    </AvatarBase>
  );
};
