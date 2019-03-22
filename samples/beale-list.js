const diceware = require("../");

(async () => {
  const passphrase = await diceware({ list: "Alan Beale" });
  console.log(passphrase);
})();
