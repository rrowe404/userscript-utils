import { createStylesheet } from "../css/createStylesheet";

/**
 * Creates styles for the passed selectors that sets pointer-events: auto for all of them.
 * @returns the styles
 */
export function forcePointerEventsAuto(selectors: string[]): string {
    const sheet = `${selectors.join(', ')} { pointer-events: auto !important; }`;
    return sheet;
}