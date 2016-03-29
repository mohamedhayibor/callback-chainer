callback-chainer ![](https://img.shields.io/badge/status-stable-green.svg)
----
This module returns the result from callbacks in a specific order (array of functions), one feeding the next.

## Installation
```
  > npm install callback-chainer
```

## Usage

Params: [array of functions with desired order] and arg
> callbackChainer([fn1, fn2, fn3, ...])(arg)

```js
import callbackChainer from 'callback-chainer' // or  const callbackChainer = require('callback-chainer')

const add = function (i) { return i + 2; };
const mul = function (i) { return 2 * i; };
const sub = function (i) { return i - 5; };

callbackChainer([add, mul, sub])(8) // ==> 15
```

## Raison d'être
Functions are super cool in JS but in the end what matters is how you call them within your logic. In the case you need a number of functions to be called in a specific order this module might be a help.

Super Light (7 sloc). No dependencies.

## License
![](https://img.shields.io/badge/license-MIT-blue.svg) © [Mohamed Hayibor](https://github.com/mohamedhayibor)
