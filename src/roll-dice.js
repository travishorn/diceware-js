import { randomInt } from "node:crypto";

const rolls = num => {
  const result = [];

  while (result.length < num) {
    result.push(randomInt(1, 7));
  }

  return result;
};

const sets = async options => {
  const prmSets = [];

  while (prmSets.length < options.sets) {
    prmSets.push(rolls(options.rollsEach));
  }

  const result = await Promise.all(prmSets);
  return result;
};

export default sets;
