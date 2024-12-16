import { contentBlocker } from "./contentBlocker";

describe("contentBlocker", () => {
  it("should output correctly", () => {
    expect(
      contentBlocker({
        forceDisplayNoneSelectors: ["test"],
        forceOverflowVisibleSelectors: ["html"],
        forcePointerEventsAutoSelectors: ["html", "body"],
      })
    ).toBe(`test { display: none !important; }
html { overflow: visible !important; }
html, body { pointer-events: auto !important; }`);
  });
});
