function sum(a, b) {
  if (!a) {
    a = 0;
  }
  if (!b) {
    b = 0;
  }
  return Number((a + b).toFixed(2));
}

function subtract(a, b) {
  if (!a) {
    a = 0;
  }
  if (!b) {
    b = 0;
  }
  return Number((a - b).toFixed(2));
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  } else {
    return Number((a / b).toFixed(2));
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
