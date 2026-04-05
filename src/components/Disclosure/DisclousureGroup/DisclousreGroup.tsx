// TODO: better api for clients

import { clsx } from "clsx";
import { DisclosureGroup as UnstyledDisclosureGroup } from "react-aria-components";
import { Disclosure } from "@/components/Disclosure/Disclosure";
import styles from "./disclosureGroup.module.css";
import type { DisclosureGroupProps } from "./types";

export const DisclosureGroup = ({ items }: DisclosureGroupProps) => {
    return (
        <UnstyledDisclosureGroup className={clsx(styles["disclosure-group"])}>
            {items.map((item) => {
                return (
                    <Disclosure
                        key={item.id}
                        heading={item.heading}
                        id={item.id}
                    >
                        {item.children}
                    </Disclosure>
                );
            })}
        </UnstyledDisclosureGroup>
    );
};
