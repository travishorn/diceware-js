import diceware from "../src/index.js";

/**
 * Recursively generates a passphrase until it meets the minimum character length.
 *
 * @returns {Promise<string>} A promise that resolves to a passphrase of at least 20 characters.
 */
async function generate() {
  const p = await diceware({
    words: 3,
    list: "EFF Long"
  });

  return p.length >= 20 ? p : await generate();
}

const passphrase = await generate();
console.log(passphrase);
