import { createStylesheet } from "../css/createStylesheet";
import { forceDisplayNone } from "../forceDisplayNone/forceDisplayNone";
import { forceOverflowVisible } from "../forceOverflowVisible/forceOverflowVisible";
import { forcePointerEventsAuto } from "../forcePointerEventsAuto/forcePointerEventsAuto";

interface ContentBlockerConfig {
  /** selectors to hide */
  forceDisplayNoneSelectors?: string[];

  /** selectors to force scrolling on */
  forceOverflowVisibleSelectors?: string[];

  /** selectors to force allow mouse usage on */
  forcePointerEventsAutoSelectors?: string[];

  /** Whether to create the stylesheet, defaults to true */
  create?: boolean;
}

/**
 * Builds a custom adblocker/adblocker-blocker-blocker from configuration,
 * then creates a stylesheet and adds it to the page
 */
export function contentBlocker(config: ContentBlockerConfig): string {
  const {
    forceDisplayNoneSelectors,
    forceOverflowVisibleSelectors,
    forcePointerEventsAutoSelectors,
    create = true,
  } = config;

  const result = [
    forceDisplayNone(forceDisplayNoneSelectors),
    forceOverflowVisible(forceOverflowVisibleSelectors),
    forcePointerEventsAuto(forcePointerEventsAutoSelectors),
  ];

  const sheet = result.join("\n");

  if (create) {
    createStylesheet(sheet);
  }

  return sheet;
}
