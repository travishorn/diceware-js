import processOptions from "./process-options.js";
import rollDice from "./roll-dice.js";

/**
 * Generates a cryptographically-secure diceware passphrase as a space-separated string.
 *
 * @overload
 * @param {{ words?: number, list?: string, output?: "string" } | null | undefined} [passedOptions]
 * @returns {string}
 */
/**
 * Generates a cryptographically-secure diceware passphrase as an array of words.
 *
 * @overload
 * @param {{ words?: number, list?: string, output: "array" }} passedOptions
 * @returns {string[]}
 */
/**
 * Generates a cryptographically-secure diceware passphrase.
 *
 * Dice are rolled for each requested word, the resulting roll sequences are used
 * as lookup keys into the chosen word list, and the matched words are returned
 * either as a space-separated string or as an array depending on the `output` option.
 *
 * @param {Record<string, unknown> | null | undefined} [passedOptions]
 *   Optional configuration for passphrase generation.
 *   Valid properties: `words` (number, default 5), `list` (string, default `"Arnold G. Reinhold"`),
 *   `output` (`"string"` | `"array"`, default `"string"`).
 * @returns {string | string[]} The generated passphrase as a space-separated string (default) or an array of words.
 * @throws {import('joi').ValidationError} Thrown when any provided option fails validation.
 */
export default function generate(passedOptions) {
  const options = processOptions(passedOptions);

  const rolls = rollDice({
    sets: options.words,
    rollsEach: options.list.diceLength
  });

  const passphrase = rolls.map(roll => options.list.list[roll.join("")]);

  switch (options.output) {
    case "array":
      return passphrase;
    default:
      return passphrase.join(" ");
  }
}
