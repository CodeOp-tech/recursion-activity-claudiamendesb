const {
  factorial,
  createStars,
  addUpTo,
  sum,
  fib,
  addGridItems,
  sortedInsert,
  Node
} = require("../challenges");

let node = null;

describe("Challenges - Recursion", () => {
  it("factorial function", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(7)).toBe(5040);
  });
  it("createStars function", () => {
    expect(createStars(7)).toBe("*******");
    expect(createStars(0)).toBe("");
  });
  it("addUpTo function", () => {
    expect(addUpTo(7)).toBe(28);
    expect(addUpTo(50)).toBe(1275);
  });
  it("sum function", () => {
    expect(sum([1, 2, 3, 4, 5, 6])).toBe(21);
    expect(sum([7, 13, 42, 2])).toBe(64);
  });
  it("fib function", () => {
    expect(fib(7)).toBe(21);
    expect(fib(9)).toBe(55);
  });
  it("addGridItems function", () => {
    const x = [
      [[1, 0, -3], [2, 4], [3]],
      [
        [4, 4, 3],
        [5, -3, -1],
        [6, 10]
      ],
      [
        [7, -5, -5],
        [8, 0],
        [9, 1]
      ]
    ];
    const y = [[[7], [6]]];
    expect(addGridItems(x)).toBe(50);
    expect(addGridItems(y)).toBe(13);
  });
  it("Node, sortedInsert function", () => {
    const head = new Node(3, new Node(5, new Node(9)));
    const sorted = sortedInsert(head, 1);
    expect(sorted.value).toBe(1);
    expect(sorted.next.value).toBe(3);
    expect(sorted.next.next.value).toBe(5);
    expect(sorted.next.next.next.value).toBe(9);
  });
});
