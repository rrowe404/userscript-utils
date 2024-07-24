/**
 * Removes a collection of HTML elements
 * @param nodes result of calling document.getElement(.*) or document.querySelector(.*) methods
 * @returns success or failure (no nodes to remove)
 */
export function removeNodes(nodes: Element | Iterable<Element>): boolean {
    if (!nodes) {
        return false;
    }

    const arr = nodes instanceof Element ? [nodes] : [...nodes];

    if (arr.length > 0) {
        arr.forEach(node => node.remove());
        return true;
    }

    return false;
}