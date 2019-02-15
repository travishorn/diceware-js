const Joi = require('joi');
const randomNumber = require('random-number-csprng');

const rolls = (num) => {
  const schema = Joi.number().min(1).required();
  const valid = Joi.validate(num, schema);
  if (valid.error) throw valid.error;

  const result = [];

  while (result.length < num) {
    result.push(randomNumber(1, 6));
  }

  return Promise.all(result);
};

const sets = async (options) => {
  const schema = Joi.object().keys({
    sets: Joi.number().min(1).required(),
    rollsEach: Joi.number().min(1).required(),
  });
  const valid = Joi.validate(options, schema);
  if (valid.error) throw valid.error;

  const prmSets = [];

  while (prmSets.length < options.sets) {
    prmSets.push((rolls(options.rollsEach)));
  }

  const result = await Promise.all(prmSets);
  return result;
};

module.exports = sets;
