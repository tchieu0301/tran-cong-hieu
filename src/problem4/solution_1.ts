/**
 * Calculates the summation of all integers from 1 to n using the mathematical formula.
 *
 * Formula: sum = (n * (n + 1)) / 2
 *
 * @param {number} n - The number up to which summation is calculated.
 * @returns {number} - The sum of all integers from 1 to n.
 *
 * @complexity
 * - Time Complexity: O(1) - Uses a constant-time mathematical formula.
 * - Space Complexity: O(1) - Requires no additional memory allocation.
 */
function sum_to_n_a(n: number): number {
  return n * (n + 1) / 2;
}
