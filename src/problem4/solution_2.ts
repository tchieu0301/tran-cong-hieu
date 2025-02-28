/**
 * Calculates the summation of all integers from 1 to n using an iterative loop.
 *
 * @param {number} n - The number up to which summation is calculated.
 * @returns {number} - The sum of all integers from 1 to n.
 *
 * @complexity
 * - Time Complexity: O(n) - Iterates through all numbers from 1 to n.
 * - Space Complexity: O(1) - Uses a single variable for accumulation.
 */
function sum_to_n_b(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) sum += i;

  return sum;
}
