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
test("Gutter balls except last", () => {
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
      [0, 1],
    ]),
  ).toBe(1);
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
test("No pair > 9", () => {
  expect(
    calculateScore([
      [6, 2], //8
      [3, 5], //16
      [4, 1], //21
      [2, 2], //25
      [6, 3], //34
      [8, 0], //42
      [1, 1], //44
      [3, 3], //50
      [4, 4], //58
      [5, 0], //63
    ]),
  ).toBe(63);
});

test("Spare on first frame", () => {
  expect(
    calculateScore([
      [6, 4], //10 + 3 //13
      [3, 5], //(13) + 3 + 5 // frame 8// 21
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]),
  ).toBe(21);
});

test("Consecutive spares", () => {
  expect(
    calculateScore([
      [6, 4], //10 + 5 //15
      [5, 5], //15 + 10
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]),
  ).toBe(25);
});

test("Spare followed by gutter balls", () => {
  expect(
    calculateScore([
      [6, 4], //10
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
  ).toBe(10);
});

test("Spare on second frame", () => {
  expect(
    calculateScore([
      [0, 0],
      [5, 5], //10 + next first throw //14
      [4, 1], //19
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]),
  ).toBe(19);
});
test("Spare on final frame", () => {
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
      [5, 5, 4], // 14
    ]),
  ).toBe(14);
});
test("Strike ", () => {
  expect(
    calculateScore([
      [0, 0],
      [10, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]),
  ).toBe(10);
});
test("Strike on final frame", () => {
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
      [10, 1, 4], //15
    ]),
  ).toBe(15);
});

test("Spare then strike on final frame", () => {
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
      [6, 4, 10], //20
    ]),
  ).toBe(20);
});

test("strike then spare on final frame", () => {
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
      [10, 6, 4], //20
    ]),
  ).toBe(20);
});

test("2 strikes then 4 on final frame", () => {
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
      [10, 10, 4], //24
    ]),
  ).toBe(24);
});

test("Strike followed by gutter ball on final frame", () => {
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
      [10, 0, 0], //10
    ]),
  ).toBe(10);
});

test("3 strikes final frame", () => {
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
      [10, 10, 10], //30
    ]),
  ).toBe(30);
});

test("5 recurring strikes into final frame", () => {
  expect(
    calculateScore([
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [10, 0], // 30
      [10, 0], // 60
      [10, 10, 10], // 90
    ]),
  ).toBe(90);
});

test.only("all strikes", () => {
  expect(
    calculateScore([
      [10, 0], // 30
      [10, 0], // 60
      [10, 0], //90
      [10, 0], // 120
      [10, 0], //150
      [10, 0], //180
      [10, 0], //210
      [10, 0], // 240
      [10, 0], // 270
      [10, 10, 10], // 280 + 10 + 10
    ]),
  ).toBe(300);
});

test("all spares", () => {
  expect(
    calculateScore([
      [6, 4], //14
      [4, 6], //28
      [4, 6], //42
      [4, 6], //56
      [4, 6], //70
      [4, 6], //84
      [4, 6], //98
      [4, 6], //112
      [4, 6], //126
      [6, 4, 6], //144
    ]),
  ).toBe(144);
});

test("Strike in the middle with a fowl on second throw of next frame", () => {
  expect(
    calculateScore([
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [10, 0], //15
      [5, 0], // 20
      [5, 1], // 26
    ]),
  ).toBe(26);
});

test("Spare on second to last frame", () => {
  expect(
    calculateScore([
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [10, 0], //20
      [5, 5], // 35
      [5, 1], // 41
    ]),
  ).toBe(41);
});
