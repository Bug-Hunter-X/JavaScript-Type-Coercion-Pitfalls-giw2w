function foo(a, b) {
  return a + b;
}

console.log(foo(undefined, 1)); // Output: NaN
console.log(foo(null, 1));   // Output: 1
console.log(foo(0, 1));     // Output: 1