import diceware from "../src/index.js";

const passphrase = diceware({ words: 10 });
console.log(passphrase);
