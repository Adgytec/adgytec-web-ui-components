import type { DisclosureProps } from "./types";
import {
  Disclosure as UnstyledDisclousre,
  DisclosurePanel,
} from "react-aria-components";
import styles from "./disclosure.module.css";
import { ChevronRight } from "lucide-react";
import TextButton from "../../Button/TextButton";
import { ColorTheme } from "../../../utils/types";
import { ButtonShape } from "../../Button/types";

const Disclosure = ({
  heading,
  content,
  children,
  ...props
}: DisclosureProps) => {
  if (heading && content) {
    return (
      <UnstyledDisclousre
        {...props}
        className={props.className ?? styles["disclosure"]}
      >
        <h2 className={styles["trigger"]}>
          <TextButton
            slot="trigger"
            theme={ColorTheme.inverseSurface}
            shape={ButtonShape.shrink}
          >
            <ChevronRight strokeWidth={3} />
            {heading}
          </TextButton>
        </h2>

        <DisclosurePanel className={styles["panel"]}>
          <p>{content}</p>
        </DisclosurePanel>
      </UnstyledDisclousre>
    );
  }

  const isChildFunc = typeof children === "function";

  return (
    <UnstyledDisclousre
      {...props}
      className={props.className ?? styles["disclosure"]}
    >
      {isChildFunc ? (values) => children(values) : children}
    </UnstyledDisclousre>
  );
};

export default Disclosure;
