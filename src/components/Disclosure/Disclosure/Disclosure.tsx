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

const Disclosure = ({ heading, children }: DisclosureProps) => {
  return (
    <UnstyledDisclousre className={styles["disclosure"]}>
      <h2 className={styles["trigger"]}>
        <TextButton
          slot="trigger"
          theme={ColorTheme.inverseSurface}
          shape={ButtonShape.shrink}
        >
          <ChevronRight />
          {heading}
        </TextButton>
      </h2>

      <DisclosurePanel className={styles["panel"]}>
        <p>{children}</p>
      </DisclosurePanel>
    </UnstyledDisclousre>
  );
};

export default Disclosure;
