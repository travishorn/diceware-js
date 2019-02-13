const randomNumber = require('random-number-csprng');
const lists = require('./lists');

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
  };

  const options = Object.assign(defaults, passedOptions);

  const list = lists.find(l => l.name === options.list);

  if (typeof list === 'undefined') {
    const listNames = lists.map(l => l.name).join(', ');
    throw new Error(`No list exists with name: ${options.list}. Please choose from: ${listNames}`);
  }

  const prmRolls = [];

  while (prmRolls.length < options.words) {
    prmRolls.push((rollDice(list.diceLength)));
  }

  const rolls = await Promise.all(prmRolls);

  const passphrase = rolls.map(roll => list.list[roll.join('')]).join(' ');

  return passphrase;
};

module.exports = generate;
