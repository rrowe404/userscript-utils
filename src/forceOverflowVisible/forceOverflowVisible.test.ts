/**
 * @jest-environment jsdom
 */

import { forceOverflowVisible } from "./forceOverflowVisible";

describe('forceOverflowVisible', () => {
    it('should output correctly', () => {
        expect(forceOverflowVisible(['html', 'body'])).toBe('html, body { overflow: visible !important; }');
    });
});