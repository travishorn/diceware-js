import diceware from "../index.js";

(async () => {
  const passphrase = await diceware({ words: 10 });
  console.log(passphrase);
})();
