import type { DisclosureProps } from "./types";
import {
    Disclosure as UnstyledDisclosure,
    DisclosurePanel,
} from "react-aria-components";
import styles from "./disclosure.module.css";
import { ChevronRight } from "lucide-react";
import { TextButton } from "@/components/Button/TextButton";
import { clsx } from "clsx";

export const Disclosure = ({
    heading,
    children,
    id,
    triggerTheme = "inverse-surface",
}: DisclosureProps) => {
    return (
        <UnstyledDisclosure className={clsx(styles["disclosure"])} id={id}>
            <h2 className={clsx(styles["trigger"])}>
                <TextButton slot="trigger" theme={triggerTheme}>
                    <ChevronRight />
                    {heading}
                </TextButton>
            </h2>

            <DisclosurePanel className={clsx(styles["panel"])}>
                <div className={clsx(styles["panel-container"])}>
                    {children}
                </div>
            </DisclosurePanel>
        </UnstyledDisclosure>
    );
};
