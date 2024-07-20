  // also from gomakethings.com
  // modified to accept regex
  export function getNextSibling(elem: HTMLElement, selector?: string | RegExp): HTMLElement | undefined {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling as HTMLElement;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (selector instanceof RegExp && (selector.test(sibling.className) || selector.test(sibling.id))) {
        return sibling as HTMLElement;
      }

      if (typeof selector === 'string' && sibling.matches(selector)) {
        return sibling as HTMLElement;
      }

      sibling = sibling.nextElementSibling;
    }
  }