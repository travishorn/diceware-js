const test = require("ava");
const diceware = require("../");

test("Generates a passphrase", async t => {
  const passphrase = await diceware();

  t.is(typeof passphrase, "string");
  t.is(passphrase.split(" ").length, 5);
});

test("Generates a passphrase containing specified number of words", async t => {
  const one = await diceware({ words: 1 });
  const two = await diceware({ words: 2 });
  const three = await diceware({ words: 3 });

  t.is(one.split(" ").length, 1);
  t.is(two.split(" ").length, 2);
  t.is(three.split(" ").length, 3);
});

test("Generates a passphrase from specific lists", async t => {
  t.is(typeof (await diceware({ list: "Alan Beale" })), "string");
  t.is(typeof (await diceware({ list: "Arnold G. Reinhold" })), "string");
  t.is(typeof (await diceware({ list: "EFF General Short" })), "string");
  t.is(typeof (await diceware({ list: "EFF Short" })), "string");
  t.is(typeof (await diceware({ list: "EFF Long" })), "string");
});

test("Outputs an string", async t => {
  t.is(typeof (await diceware({ output: "string" })), "string");
});

test("Outputs an array", async t => {
  t.is(Array.isArray(await diceware({ output: "array" })), true);
});

test("Throws error on unknown list", async t => {
  await t.throwsAsync(diceware({ list: "foo" }));
});

test("Throws error on unsupported word length", async t => {
  await t.throwsAsync(diceware({ words: "foo" }));
  await t.throwsAsync(diceware({ words: -1 }));
});

test("Throws error on unknown output type", async t => {
  await t.throwsAsync(diceware({ output: "foo" }));
});
