const { multiply } = require('./../calculator.js');

describe('multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('should multiply a negative and a positive number correctly', () => {
    const result = multiply(-5, 2);
    expect(result).toBe(-10);
  });

  test('should return 0 when multiplying any number by 0', () => {
    const result = multiply(0, 4);
    expect(result).toBe(0);
  });
});
