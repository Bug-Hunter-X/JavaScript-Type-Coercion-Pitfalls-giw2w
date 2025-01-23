function foo(a, b) {
  // Handle undefined and null values
  a = (typeof a === 'undefined') ? 0 : a;
  a = (a === null) ? 0 : a; 
  return a + b; 
}

console.log(foo(undefined, 1)); // Output: 1
console.log(foo(null, 1));   // Output: 1
console.log(foo(0, 1));     // Output: 1