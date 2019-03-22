const diceware = require("../");

(async () => {
  const passphrase = await diceware({ words: 10 });
  console.log(passphrase);
})();
