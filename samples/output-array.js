import diceware from "../index.js";

(async () => {
  const passphrase = await diceware({ output: "array" });
  console.log(passphrase);
})();
