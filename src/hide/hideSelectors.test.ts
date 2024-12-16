/**
 * @jest-environment jsdom
 */

import { hideSelectors } from "./hideSelectors"

describe('hideSelectors', () => {
    it('should output correctly', () => {
        expect(hideSelectors(['test'])).toBe('test { display: none; }');
        expect(hideSelectors(['test1', 'test2'])).toBe('test1, test2 { display: none; }');
    });
})