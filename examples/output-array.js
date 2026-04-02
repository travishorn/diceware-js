import diceware from "../src/index.js";

const passphrase = diceware({ output: "array" });
console.log(passphrase);
