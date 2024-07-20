/**
 * Given a string and a specified padding, add that much padding to the left of the string, in spaces
 * @param value The string
 * @param padding The number of spaces
 * @returns The padded string
 */
export default function leftPad(value: string, padding: number): string {
    return value.padStart(padding + value.length, ' ');
}