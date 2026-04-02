import Joi from "joi";
import lists from "./lists/index.js";

const processOptions = (options) => {
  const listNames = lists.map((list) => list.name);

  const schema = Joi.object({
    words: Joi.number().min(1).default(5),
    list: Joi.string()
      .valid(...listNames)
      .default("Arnold G. Reinhold"),
    output: Joi.string().valid("array", "string").default("string"),
  });

  const result = schema.validate(options || {});

  if (result.error) throw result.error;

  result.value.list = lists.find((l) => l.name === result.value.list);

  return result.value;
};

export default processOptions;
