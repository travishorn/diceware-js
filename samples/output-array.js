import diceware from "../src/index.js";

const passphrase = await diceware({ output: "array" });
console.log(passphrase);
