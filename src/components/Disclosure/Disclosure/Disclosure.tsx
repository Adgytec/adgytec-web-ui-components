// TODO: better api similar to react-aria api
// client will manually create element structure to give more flexiblity and less cognitive load

import { clsx } from "clsx";
import { ChevronRight } from "lucide-react";
import {
    DisclosurePanel,
    Disclosure as UnstyledDisclosure,
} from "react-aria-components";
import { Button } from "@/components/Button";
import styles from "./disclosure.module.css";
import type { DisclosureProps } from "./types";

export const Disclosure = ({
    heading,
    children,
    id,
    triggerTheme = "inverse-surface",
}: DisclosureProps) => {
    return (
        <UnstyledDisclosure className={clsx(styles["disclosure"])} id={id}>
            <h2 className={clsx(styles["trigger"])}>
                <Button variant="text" slot="trigger" theme={triggerTheme}>
                    <ChevronRight />
                    {heading}
                </Button>
            </h2>

            <DisclosurePanel className={clsx(styles["panel"])}>
                <div className={clsx(styles["panel-container"])}>
                    {children}
                </div>
            </DisclosurePanel>
        </UnstyledDisclosure>
    );
};
