"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leftPad = leftPad;
/**
 * Given a string and a specified padding, add that much padding to the left of the string, in spaces
 * @param value The string
 * @param padding The number of spaces
 * @returns The padded string
 */
function leftPad(value, padding) {
    return value.padStart(padding + value.length, ' ');
}
