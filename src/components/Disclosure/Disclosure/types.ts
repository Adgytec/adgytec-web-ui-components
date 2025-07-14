import type { DisclosureProps as AriaDisclosureProps } from "react-aria-components";

// heading and content are required for default styled disclosure
export interface DisclosureProps extends AriaDisclosureProps {
  heading?: string;
  content?: string;
}
