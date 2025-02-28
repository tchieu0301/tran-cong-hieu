# Problem 4: Three ways to sum to n

## Task

Provide 3 unique implementations of the following function in TypeScript.
- Comment on the complexity or efficiency of each function.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

## Solutions

### Solution 1
 
Since this formula directly computes the result in constant time without looping or recursion, it is the most efficient solution.

Time Complexity: 𝑂(1) (Constant time)
Efficiency: Most efficient, as it performs a single calculation.

```ts
function sum_to_n_a(n: number): number {
  return n * (n + 1) / 2;
}
```

### Solution 2

This approach iterates from 1 to n, accumulating the sum step by step. Although not as efficient as the mathematical formula, it is simple to understand and implement.

Time Complexity: O(n) (Linear time)
Efficiency: Less efficient than Solution 1, as it requires n iterations.

```ts
function sum_to_n_b(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) sum += i;

  return sum;
}
```

### Solution 3

This approach uses recursion, where sum_to_n_c(n) calls itself with n - 1 until reaching the base case of n = 0. While functionally correct, recursion in JavaScript/TypeScript can lead to stack overflow issues for large n.

Time Complexity: O(n) (Linear time)
Efficiency: Similar to Solution 2 but with added overhead due to recursive function calls.

```ts
function sum_to_n_c(n: number): number {
  if (n <= 0) return 0;

  return n + sum_to_n_c(n - 1);
}
```