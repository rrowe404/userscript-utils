/**
 * @jest-environment jsdom
 */

import { forcePointerEventsAuto } from "./forcePointerEventsAuto";

describe('forcePointerEventsAuto', () => {
    it('should output correctly', () => {
        expect(forcePointerEventsAuto(['html', 'body'])).toBe('html, body { pointer-events: auto !important; }');
    });
});