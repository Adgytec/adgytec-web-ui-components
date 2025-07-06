import {
  AvatarSize,
  AvatarType,
  type AvatarBaseProps,
  type AvatarProps,
} from "./types";
import Error from "../Error/Error";
import styles from "./avatar.module.css";

const AvatarBase = ({ children, size, type }: AvatarBaseProps) => {
  return (
    <div className={`${styles["avatar"]} ${styles[size]} ${styles[type]}`}>
      {children}
    </div>
  );
};

const Avatar = ({
  src,
  children,
  size = AvatarSize.normal,
  label,
}: AvatarProps) => {
  if (!src && !children) {
    return <Error>Either image source or child elements are required</Error>;
  }

  if (children) {
    return (
      <AvatarBase type={AvatarType.node} size={size}>
        {children}
      </AvatarBase>
    );
  }

  return (
    <AvatarBase size={size} type={AvatarType.image}>
      <img src={src} alt={label} />
    </AvatarBase>
  );
};

export default Avatar;
