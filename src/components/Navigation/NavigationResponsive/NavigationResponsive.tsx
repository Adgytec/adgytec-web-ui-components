import { useMediaQuery } from "usehooks-ts";
import type { NavigationResponsiveProps } from "./types";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { NavigationSidebar } from "../NavigationSidebar/NavigationSidebar";

export const NavigationResponsive = ({
  items,
  mediaQuery,
  ...sidebarProps
}: NavigationResponsiveProps) => {
  const matches = useMediaQuery(`(${mediaQuery})`);

  return matches ? (
    <NavigationMenu items={items} />
  ) : (
    <NavigationSidebar items={items} {...sidebarProps} />
  );
};
