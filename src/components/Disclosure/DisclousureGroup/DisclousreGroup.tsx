import Disclosure from "../Disclosure/Disclosure";
import type { DisclosureGroupProps } from "./types";
import { DisclosureGroup as UnstyledDisclosureGroup } from "react-aria-components";
import styles from "./disclosureGroup.module.css";

const DisclosureGroup = ({ items, ...props }: DisclosureGroupProps) => {
  return (
    <UnstyledDisclosureGroup
      {...props}
      className={props.className ?? styles["disclosure-group"]}
    >
      {items.map((item) => {
        return <Disclosure key={item.id} {...item} />;
      })}
    </UnstyledDisclosureGroup>
  );
};

export default DisclosureGroup;
