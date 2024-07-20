  // stolen from https://gomakethings.com/finding-the-next-and-previous-sibling-elements-that-match-a-selector-with-vanilla-js/
  // modified to accept regex
  export function getPreviousSibling(elem: HTMLElement, selector?: string | RegExp) {
    // Get the next sibling element
    var sibling = elem.previousElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (selector instanceof RegExp && (selector.test(sibling.className) || selector.test(sibling.id))) {
        return sibling as HTMLElement;
      }

      if (typeof selector === 'string' && sibling.matches(selector)) {
        return sibling as HTMLElement;
      }
      sibling = sibling.previousElementSibling;
    }
  }