const beale = require("./beale.json");
const reinhold = require("./reinhold.json");
const effGeneralShort = require("./eff-general-short.json");
const effShort = require("./eff-short.json");
const effLong = require("./eff-long.json");

module.exports = [
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
