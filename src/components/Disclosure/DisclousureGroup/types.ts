import type { DisclosureProps } from "../Disclosure/types";
import type { DisclosureGroupProps as AriaDisclosureGroupProps } from "react-aria-components";

export interface DisclosureGroupProps extends AriaDisclosureGroupProps {
  items: DisclosureProps[];
}
