"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreviousSibling = getPreviousSibling;
// stolen from https://gomakethings.com/finding-the-next-and-previous-sibling-elements-that-match-a-selector-with-vanilla-js/
// modified to accept regex
function getPreviousSibling(elem, selector) {
    // Get the next sibling element
    var sibling = elem.previousElementSibling;
    // If there's no selector, return the first sibling
    if (!selector)
        return sibling;
    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
        if (selector instanceof RegExp && (selector.test(sibling.className) || selector.test(sibling.id))) {
            return sibling;
        }
        if (typeof selector === 'string' && sibling.matches(selector)) {
            return sibling;
        }
        sibling = sibling.previousElementSibling;
    }
}
