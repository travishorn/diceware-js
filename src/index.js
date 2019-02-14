const randomNumber = require('random-number-csprng');
const lists = require('./lists');

const processOptions = (...rest) => {
  const options = Object.assign({}, ...rest);
  const outputTypes = ['array', 'string'];
  const words = parseInt(options.words, 10);

  if (Number.isNaN(words) || words <= 0) throw new Error(`Unsupported number of words: ${options.words}. Please choose an integer greater than 0.`);

  options.words = words;

  options.list = lists.find(l => l.name === options.list);

  if (typeof options.list === 'undefined') {
    const listNames = lists.map(l => l.name).join(', ');
    throw new Error(`No list exists with name: ${options.list}. Please choose from: ${listNames}`);
  }

  if (!outputTypes.includes(options.output)) throw new Error(`Unsupported output type: ${options.output}. Please choose from: ${outputTypes.join(', ')}`);

  return options;
};

const rollDice = (num) => {
  const rolls = [];

  while (rolls.length < num) {
    rolls.push(randomNumber(1, 6));
  }

  return Promise.all(rolls);
};

const generate = async (passedOptions) => {
  const defaults = {
    words: 5,
    list: 'Arnold G. Reinhold',
    output: 'string',
  };

  const options = processOptions(defaults, passedOptions);

  const prmRolls = [];

  while (prmRolls.length < options.words) {
    prmRolls.push((rollDice(options.list.diceLength)));
  }

  const rolls = await Promise.all(prmRolls);

  const passphrase = rolls.map(roll => options.list.list[roll.join('')]);

  switch (options.output) {
    case 'array':
      return passphrase;
    default:
      return passphrase.join(' ');
  }
};

module.exports = generate;
