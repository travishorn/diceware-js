/* eslint-env jest */

const diceware = require('../');

test('Generates a passphrase', async () => {
  expect(typeof await diceware()).toBe('string');
});

test('Generates a passphrase containing specified number of words', async () => {
  const one = await diceware({ words: 1 });
  const two = await diceware({ words: 2 });
  const three = await diceware({ words: 3 });

  expect(one.split(' ').length).toBe(1);
  expect(two.split(' ').length).toBe(2);
  expect(three.split(' ').length).toBe(3);
});

test('Generates a passphrase from Alan Beale list', async () => {
  expect(typeof await diceware({ list: 'Alan Beale' })).toBe('string');
});

test('Generates a passphrase from Arnold G. Reinhold list', async () => {
  expect(typeof await diceware({ list: 'Arnold G. Reinhold' })).toBe('string');
});

test('Generates a passphrase from EFF General Short list', async () => {
  expect(typeof await diceware({ list: 'EFF General Short' })).toBe('string');
});

test('Generates a passphrase from EFF Short list', async () => {
  expect(typeof await diceware({ list: 'EFF Short' })).toBe('string');
});

test('Generates a passphrase from EFF Long list', async () => {
  expect(typeof await diceware({ list: 'EFF Long' })).toBe('string');
});

test('Throws error on unknown list', async () => {
  try {
    await diceware({ list: 'foo' });
  } catch (err) {
    expect(typeof err).toBe('object');
  }
});
