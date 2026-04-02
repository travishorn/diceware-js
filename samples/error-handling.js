import diceware from "../index.js";

(async () => {
  try {
    const passphrase = await diceware({ words: -1 });
    console.log(passphrase);
  } catch (err) {
    console.error(err);
  }
})();
