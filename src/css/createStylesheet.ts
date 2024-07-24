export function createStylesheet(styles: string): HTMLStyleElement {
    const stylesheet = document.createElement('style');
    stylesheet.innerText = styles;
    document.head.appendChild(stylesheet);
    return stylesheet;
}