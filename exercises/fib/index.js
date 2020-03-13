// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let entries = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     entries[i] = entries[i - 1] + entries[i - 2];
//   }
//   return entries[n];
// }

// recursive - exponential time complexity (2^n)
function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return slowFib(n - 1) + slowFib(n - 2);
}

// we can use memoize to make it faster by reducing repeated func calling
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

const fib = memoize(slowFib);

module.exports = fib;
