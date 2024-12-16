import { createStylesheet } from "../css/createStylesheet";

/**
 * Creates a stylesheet for the passed selectors that sets display: none for all of them.
 * @returns the content of the sheet that was created
 */
export function hideSelectors(selectors: string[]): string {
    const sheet = `${selectors.join(', ')} { display: none; }`;
    createStylesheet(sheet);
    return sheet;
}