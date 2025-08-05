import { useMediaQuery } from "usehooks-ts";
import type { NavigationResponsiveProps } from "./types";
import { NavigationMenu } from "@/components/Navigation/NavigationMenu/NavigationMenu";
import { NavigationSidebar } from "@/components/Navigation/NavigationSidebar/NavigationSidebar";

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
