const Joi = require("joi");
const lists = require("./lists");

module.exports = options => {
  const listNames = lists.map(list => list.name);

  const schema = Joi.object().keys({
    words: Joi.number()
      .min(1)
      .default(5),
    list: Joi.string()
      .valid(listNames)
      .default("Arnold G. Reinhold"),
    output: Joi.string()
      .valid(["array", "string"])
      .default("string")
  });

  const result = Joi.validate(options || {}, schema);

  if (result.error) throw result.error;

  result.value.list = lists.find(l => l.name === result.value.list);

  return result.value;
};
