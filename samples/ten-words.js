import diceware from "../src/index.js";

const passphrase = await diceware({ words: 10 });
console.log(passphrase);
