# Diceware JS

Cryptographically-secure electronic implementation of the [Diceware Passphrase method](http://world.std.com/~reinhold/diceware.html) in JavaScript.

## Installation

### Production

```
> npm i @travishorn/diceware
```

### Development

```
> git clone https://github.com/travishorn/diceware-js.git
> cd diceware-js
> npm i
```

## Usage

This package is [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)-based.

```javascript
const diceware = require('@travishorn/diceware');

diceware()
  .then((passphrase) => {
    console.log(passphrase);
  });

// ought amigo dow hebe send
```

## Options

### words

The number of words to be used in the passphrase.

Default: `5`

```javascript
diceware({ words: 8 });
// verne foss tog soup lawn legion hyde krebs
```

### list

Which diceware list from which to pull words.

Default: `'Arnold G. Reinhold'`

```javascript
diceware({ list: 'EFF Short' });
// ditto gem evidence zestfully septum
```

Supported lists:

- `Alan Beale`
- `Arnold G. Reinhold`
- `EFF General Short`
- `EFF Short`
- `EFF Long`

### output

The type of output.

Default: `'string'`

```javascript
diceware({ output: 'array' });
// [ 'laze', 'sx', 'dope', 'cagey', 'papaw' ]
```

Supported types:

- `array`
- `string`

## Testing

Tests are in the `test` directory. Run them with:

```
> npm test
```

## License

The MIT License

Copyright 2019 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
