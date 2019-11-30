const math = require("./math");

const first = 3;
const second = 7;

// testing synchronus functions
test("sum adds numbers", () => {
  const result = math.sum(first, second);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = math.subtract(first, second);
  const expected = -4;
  expect(result).toBe(expected);
});

// testing asynchronus functions
test("sumAsync adds numbers asynchronously", async () => {
  const result = await math.sumAsync(first, second);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync substracts numbers asynchronously", async () => {
  const results = await math.subtractAsync(first, second);
  const expected = -4;
  expect(results).toBe(expected);
});
