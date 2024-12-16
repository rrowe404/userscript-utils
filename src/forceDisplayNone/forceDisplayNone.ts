import { createStylesheet } from "../css/createStylesheet";

/**
 * Creates styles for the passed selectors that sets display: none for all of them.
 * @returns the styles
 */
export function forceDisplayNone(selectors: string[] | undefined): string {
  if (!selectors) return "";
  const sheet = `${selectors.join(", ")} { display: none !important; }`;
  return sheet;
}
