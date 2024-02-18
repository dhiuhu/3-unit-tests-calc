const { add, subtract, multiply, divide } = require('./calculator');

test('addition', () => {
  expect(add(4, 3)).toBe(7);
});

test('subtraction', () => {
  expect(subtract(100, 3)).toBe(97);
});

test('multiplication', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('division', () => {
  expect(divide(70, 2)).toBe(35);
});

test('division by zero', () => {
  expect(divide(500, 0)).toBe('Cannot divide by zero');
});
