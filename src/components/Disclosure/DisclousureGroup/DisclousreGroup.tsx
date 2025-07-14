import { Disclosure } from "../Disclosure/Disclosure";
import type { DisclosureGroupProps } from "./types";
import { DisclosureGroup as UnstyledDisclosureGroup } from "react-aria-components";
import styles from "./disclosureGroup.module.css";

export const DisclosureGroup = ({ items }: DisclosureGroupProps) => {
  return (
    <UnstyledDisclosureGroup className={styles["disclosure-group"]}>
      {items.map((item) => {
        return (
          <Disclosure key={item.id} heading={item.heading} id={item.id}>
            {item.children}
          </Disclosure>
        );
      })}
    </UnstyledDisclosureGroup>
  );
};
