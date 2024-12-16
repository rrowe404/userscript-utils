import { forceDisplayNone } from "../forceDisplayNone/forceDisplayNone";
import { forceOverflowVisible } from "../forceOverflowVisible/forceOverflowVisible";
import { forcePointerEventsAuto } from "../forcePointerEventsAuto/forcePointerEventsAuto";

interface ContentBlockerConfig {
    /** selectors to hide */
    forceDisplayNoneSelectors: string[];

    /** selectors to force scrolling on */
    forceOverflowVisibleSelectors: string[];

    /** selectors to force allow mouse usage on */
    forcePointerEventsAutoSelectors: string[];
}

/**
 * Builds a custom adblocker/adblocker-blocker-blocker from configuration
 * @returns a stylesheet
 */
export function contentBlocker(config: ContentBlockerConfig): string {
    const { forceDisplayNoneSelectors, forceOverflowVisibleSelectors, forcePointerEventsAutoSelectors } = config;

    const result = [
        forceDisplayNone(forceDisplayNoneSelectors),
        forceOverflowVisible(forceOverflowVisibleSelectors),
        forcePointerEventsAuto(forcePointerEventsAutoSelectors)
    ];

    return result.join('\n');
}