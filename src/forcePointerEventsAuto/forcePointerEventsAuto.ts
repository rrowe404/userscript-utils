/**
 * Creates styles for the passed selectors that sets pointer-events: auto for all of them.
 * @returns the styles
 */
export function forcePointerEventsAuto(selectors: string[] | undefined): string {
  if (!selectors) return "";
  const sheet = `${selectors.join(", ")} { pointer-events: auto !important; }`;
  return sheet;
}
