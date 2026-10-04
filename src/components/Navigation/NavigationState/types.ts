/**
 * Map recording scroll progress values (0 to 1) keyed by navigation level identifier.
 */
export type NavScrollInfo = Record<string, number>;

/**
 * Representation of an active sub-navigation panel in the navigation stack.
 */
export type SubNavItem = {
    /**
     * Unique identifier for the sub-navigation panel.
     */
    id: string;
    /**
     * Nesting depth level of the sub-navigation panel.
     */
    depth: number;
};
