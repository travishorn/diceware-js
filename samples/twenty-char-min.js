const diceware = require('../');

const generate = async () => {
  const p = await diceware({
    words: 3,
    list: 'EFF Long',
  });

  return p.length >= 20 ? p : generate();
};

(async () => {
  const passphrase = await generate();
  console.log(passphrase);
})();
