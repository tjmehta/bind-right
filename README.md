bind-right [![Build Status](https://travis-ci.org/tjmehta/bind-right.png)](https://travis-ci.org/tjmehta/bind-right)
==========

JavaScript: bind arguments from the right.

# Installation

```bash
npm install bind-right
```

# Usage

```js
require('bind-right'); // extends the function prototype

function createArray (/* items */) {
  return [].concat(arguments);
};

var thisArg = null;
var bound = createArray.bindRight(thisArg, 3,4,5);
var array = bound(1,2,3);

// array: [1, 2, 3, 4, 5, 6];
```

## OMG IT EXTENDS FUNCTION???!?!@

Yes, as it should.

# License

MIT
