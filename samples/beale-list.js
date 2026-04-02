import diceware from "../index.js";

(async () => {
  const passphrase = await diceware({ list: "Alan Beale" });
  console.log(passphrase);
})();
