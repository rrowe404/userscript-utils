/**
 * @jest-environment jsdom
 */

import { forceDisplayNone } from "./forceDisplayNone"

describe('forceDisplayNone', () => {
    it('should output correctly', () => {
        expect(forceDisplayNone(['test'])).toBe('test { display: none !important; }');
        expect(forceDisplayNone(['test1', 'test2'])).toBe('test1, test2 { display: none !important; }');
    });
})