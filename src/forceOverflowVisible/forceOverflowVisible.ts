import { createStylesheet } from "../css/createStylesheet";

/**
 * Creates styles for the passed selectors that sets overflow: visible for all of them.
 * @returns the styles
 */
export function forceOverflowVisible(selectors: string[]): string {
    const sheet = `${selectors.join(', ')} { overflow: visible !important; }`;
    return sheet;
}