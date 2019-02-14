const diceware = require('../');

(async () => {
  const passphrase = await diceware();
  console.log(passphrase);
})();
