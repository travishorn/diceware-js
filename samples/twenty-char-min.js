import diceware from "../src/index.js";

/**
 * Recursively generates a passphrase until it meets the minimum character length.
 *
 * @returns {string} A passphrase of at least 20 characters.
 */
function generate() {
  const p = diceware({
    words: 3,
    list: "EFF Long"
  });

  return p.length >= 20 ? p : generate();
}

const passphrase = generate();
console.log(passphrase);
