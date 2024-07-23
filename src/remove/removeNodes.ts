/**
 * Removes a collection of HTML elements
 * @param nodes result of calling document.getElementsBy(.*) method
 * @returns success or failure (no nodes to remove)
 */
export function removeNodes(nodes: HTMLCollectionOf<Element>): boolean {
    const arr = [...nodes];

    if (arr.length > 0) {
        arr.forEach(node => node.remove());
        return true;
    }

    return false;
}