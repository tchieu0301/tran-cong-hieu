/**
 * Calculates the summation of all integers from 1 to n using recursion.
 *
 * @param {number} n - The number up to which summation is calculated.
 * @returns {number} - The sum of all integers from 1 to n.
 *
 * @complexity
 * - Time Complexity: O(n) - Makes n recursive calls.
 * - Space Complexity: O(n) - Uses stack space for recursive calls.
 */
function sum_to_n_c(n: number): number {
  if (n <= 0) return 0;

  return n + sum_to_n_c(n - 1);
}
