import { randomInt } from "node:crypto";

/**
 * Rolls a single six-sided die the specified number of times using a
 * cryptographically-secure random number generator.
 *
 * @param {number} num - The number of times to roll the die.
 * @returns {number[]} An array of random integers, each between 1 and 6 inclusive.
 */
function rolls(num) {
  const result = [];

  while (result.length < num) {
    result.push(randomInt(1, 7));
  }

  return result;
}

/**
 * Generates multiple independent sets of dice rolls.
 *
 * @param {object} options - The roll configuration.
 * @param {number} options.sets - The number of independent dice roll sets to generate.
 * @param {number} options.rollsEach - The number of individual dice rolled per set.
 * @returns {Promise<number[][]>} A promise that resolves to an array of dice roll sets,
 *   where each inner array contains integers between 1 and 6 inclusive.
 */
export default async function sets(options) {
  const prmSets = [];

  while (prmSets.length < options.sets) {
    prmSets.push(rolls(options.rollsEach));
  }

  const result = await Promise.all(prmSets);
  return result;
}
