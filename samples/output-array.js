const diceware = require('../');

(async () => {
  const passphrase = await diceware({ output: 'array' });
  console.log(passphrase);
})();
