import Joi from "joi";
import lists from "./lists/index.js";

/**
 * Validates and normalizes the options provided by the caller, applying defaults
 * for any omitted properties and resolving the word list name to its full object.
 *
 * @param {{ words?: number, list?: string, output?: string } | null | undefined} options
 *   The raw user-supplied options. All properties are optional and receive defaults when omitted.
 * @returns {{ words: number, list: import('./lists/index.js').WordList, output: string }}
 *   The validated and normalized options with the `list` property resolved from its
 *   string name to the corresponding {@link import('./lists/index.js').WordList} object.
 * @throws {import('joi').ValidationError} Thrown when any provided option fails schema validation.
 */
function processOptions(options) {
  const listNames = lists.map(list => list.name);

  const schema = Joi.object({
    words: Joi.number()
      .min(1)
      .default(5),
    list: Joi.string()
      .valid(...listNames)
      .default("Arnold G. Reinhold"),
    output: Joi.string()
      .valid("array", "string")
      .default("string")
  });

  const result = schema.validate(options || {});

  if (result.error) throw result.error;

  result.value.list = lists.find(l => l.name === result.value.list);

  return result.value;
}

export default processOptions;
