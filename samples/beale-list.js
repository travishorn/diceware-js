import diceware from "../src/index.js";

const passphrase = await diceware({ list: "Alan Beale" });
console.log(passphrase);
