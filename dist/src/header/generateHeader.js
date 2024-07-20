"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHeader = generateHeader;
const leftPad_1 = require("../leftPad/leftPad");
function generateHeader(options) {
    const entries = Object.entries(options);
    const longestLength = Math.max(...entries.map(([key]) => key.length));
    const padding = longestLength + 3;
    return `// ==UserScript==
${entries.map(([key, value]) => {
        const delta = padding - key.length;
        return `//@${key}${(0, leftPad_1.leftPad)(value, delta)}`;
    }).join('\n')}
// ==/UserScript==
`;
}
