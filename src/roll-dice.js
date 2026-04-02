import randomNumber from "random-number-csprng";

const rolls = (num) => {
  const result = [];

  while (result.length < num) {
    result.push(randomNumber(1, 6));
  }

  return Promise.all(result);
};

const sets = async (options) => {
  const prmSets = [];

  while (prmSets.length < options.sets) {
    prmSets.push(rolls(options.rollsEach));
  }

  const result = await Promise.all(prmSets);
  return result;
};

export default sets;
