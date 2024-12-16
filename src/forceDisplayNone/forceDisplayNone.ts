import { createStylesheet } from "../css/createStylesheet";

/**
 * Creates styles for the passed selectors that sets display: none for all of them.
 * @returns the styles
 */
export function forceDisplayNone(selectors: string[]): string {
    const sheet = `${selectors.join(', ')} { display: none !important; }`;
    return sheet;
}