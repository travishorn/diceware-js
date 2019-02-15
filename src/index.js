const processOptions = require('./process-options');
const rollDice = require('./roll-dice');

const generate = async (passedOptions) => {
  const options = processOptions(passedOptions);
  const rolls = await rollDice({ sets: options.words, rollsEach: options.list.diceLength });
  const passphrase = rolls.map(roll => options.list.list[roll.join('')]);

  switch (options.output) {
    case 'array':
      return passphrase;
    default:
      return passphrase.join(' ');
  }
};

module.exports = generate;
