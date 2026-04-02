/**
 * @typedef {Object} WordList
 * @property {string} name - The display name of the word list.
 * @property {string} description - A brief description of the word list's origin and characteristics.
 * @property {number} diceLength - The number of dice rolled per word to generate each lookup key.
 * @property {Object.<string, string>} list - A mapping from concatenated dice roll digits to words.
 */

import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const beale = require("./beale.json");
const reinhold = require("./reinhold.json");
const effGeneralShort = require("./eff-general-short.json");
const effShort = require("./eff-short.json");
const effLong = require("./eff-long.json");

/** @type {WordList[]} */
export default [
  {
    name: "Alan Beale",
    description:
      "An alternative list edited by Alan Beale which contains fewer Americanisms and obscure words than Arnold G. Reinhold's list",
    diceLength: 5,
    list: beale
  },
  {
    name: "Arnold G. Reinhold",
    description:
      "The original list. Short words, abbreviations, and easy-to-remember character strings. Based on a longer world list posted to the Internet news group sci.crypt by Peter Kwangjun Suk.",
    diceLength: 5,
    list: reinhold
  },
  {
    name: "EFF General Short",
    description:
      "Electronic Frontier Foundation's general short word list for use with four dice.",
    diceLength: 4,
    list: effGeneralShort
  },
  {
    name: "EFF Short",
    description:
      "Electronic Frontier Foundation's short word list with words that have unique three-character prefixes.",
    diceLength: 4,
    list: effShort
  },
  {
    name: "EFF Long",
    description:
      "Electronic Frontier Foundation's long word list for use with five dice.",
    diceLength: 5,
    list: effLong
  }
];
