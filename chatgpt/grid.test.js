



describe("Grid CSS class", () => {
    test("is being applied to the correct element", () => {
      const gridElement = document.querySelector(".grid");
      expect(gridElement.classList.contains("grid")).toBe(true);
    });
  });
  