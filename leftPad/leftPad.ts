export default function leftPad(value: string, padding: number): string {
    return value.padStart(padding + value.length, ' ');
}