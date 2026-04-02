import diceware from "../index.js";

(async () => {
  const passphrase = await diceware();
  console.log(passphrase);
})();
