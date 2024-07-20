import leftPad from "../leftPad/leftPad";
export default function generateHeader(options) {
    const entries = Object.entries(options);
    const longestLength = Math.max(...entries.map(([key]) => key.length));
    const padding = longestLength + 3;
    return `// ==UserScript==
${entries.map(([key, value]) => {
        const delta = padding - key.length;
        return `//@${key}${leftPad(value, delta)}`;
    }).join('\n')}
// ==/UserScript==
`;
}
