# JavaScript Type Coercion Pitfalls

This repository demonstrates a common pitfall in JavaScript related to type coercion when performing arithmetic operations. Specifically, it highlights the unexpected behavior when using `undefined` and `null` in addition.

## The Problem

In JavaScript, `undefined` and `null` behave differently when used in mathematical contexts. When you add `undefined` to a number, the result is `NaN` (Not a Number).  However, adding `null` to a number results in the number itself.

This can lead to subtle bugs that are difficult to track down if you are not aware of how JavaScript handles type coercion in these cases.

## The Solution

The best solution is to always explicitly check for `undefined` and `null` and handle these values accordingly before performing arithmetic operations. This improves code predictability and prevents unexpected behavior.

## How to Run

1. Clone this repository.
2. Open `bug.js` to see the problematic code.
3. Open `bugSolution.js` to see the corrected code.
4. Run the JavaScript files using Node.js or any other JavaScript runtime environment.
