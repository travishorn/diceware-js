import diceware from "../src/index.js";

try {
  const passphrase = diceware({ words: -1 });
  console.log(passphrase);
} catch (err) {
  console.error(err);
}
