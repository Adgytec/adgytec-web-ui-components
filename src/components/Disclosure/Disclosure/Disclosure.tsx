import type { DisclosureProps } from "./types";
import {
    Disclosure as UnstyledDisclosure,
    DisclosurePanel,
} from "react-aria-components";
import styles from "./disclosure.module.css";
import { ChevronRight } from "lucide-react";
import { TextButton } from "@/components/Button/TextButton";

export const Disclosure = ({ heading, children, id }: DisclosureProps) => {
    return (
        <UnstyledDisclosure className={styles["disclosure"]} id={id}>
            <h2 className={styles["trigger"]}>
                <TextButton slot="trigger" theme="inverse-surface">
                    <ChevronRight />
                    {heading}
                </TextButton>
            </h2>

            <DisclosurePanel className={styles["panel"]}>
                <div className={styles["panel-container"]}>{children}</div>
            </DisclosurePanel>
        </UnstyledDisclosure>
    );
};
