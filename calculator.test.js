const { add, subtract, multiply, divide } = require('./calculator');

test('addition', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtraction', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplication', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('division', () => {
  expect(divide(6, 2)).toBe(3);
});

test('division by zero', () => {
  expect(divide(6, 0)).toBe('Cannot divide by zero');
});
