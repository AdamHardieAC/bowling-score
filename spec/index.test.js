const calculateScore = require("../index");
test("Gutter balls", () => {
  expect(
    calculateScore([
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]),
  ).toBe(0);
});
test("All 3s", () => {
  expect(
    calculateScore([
      [3, 3],
      [3, 3],
      [3, 3],
      [3, 3],
      [3, 3],
      [3, 3],
      [3, 3],
      [3, 3],
      [3, 3],
      [3, 3],
    ]),
  ).toBe(60);
});
