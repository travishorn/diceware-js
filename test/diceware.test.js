import test from "ava";
import diceware from "../src/index.js";

test("Generates a passphrase", t => {
  const passphrase = diceware();

  t.is(typeof passphrase, "string");
  t.is(passphrase.split(" ").length, 5);
});

test("Generates a passphrase containing specified number of words", t => {
  const one = diceware({ words: 1 });
  const two = diceware({ words: 2 });
  const three = diceware({ words: 3 });

  t.is(one.split(" ").length, 1);
  t.is(two.split(" ").length, 2);
  t.is(three.split(" ").length, 3);
});

test("Generates a passphrase from specific lists", t => {
  t.is(typeof diceware({ list: "Alan Beale" }), "string");
  t.is(typeof diceware({ list: "Arnold G. Reinhold" }), "string");
  t.is(typeof diceware({ list: "EFF General Short" }), "string");
  t.is(typeof diceware({ list: "EFF Short" }), "string");
  t.is(typeof diceware({ list: "EFF Long" }), "string");
});

test("Outputs an string", t => {
  t.is(typeof diceware({ output: "string" }), "string");
});

test("Outputs an array", t => {
  t.is(Array.isArray(diceware({ output: "array" })), true);
});

test("Throws error on unknown list", t => {
  t.throws(() => diceware({ list: "foo" }));
});

test("Throws error on unsupported word length", t => {
  //@ts-expect-error
  t.throws(() => diceware({ words: "foo" }));
  t.throws(() => diceware({ words: -1 }));
});

test("Throws error on unknown output type", t => {
  //@ts-expect-error
  t.throws(() => diceware({ output: "foo" }));
});
