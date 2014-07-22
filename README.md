# omit-keys-stream

Omit object keys from an `objectMode` stream using http://lodash.com/docs#omit

[![build status](https://secure.travis-ci.org/domharrington/omit-keys-stream.png)](http://travis-ci.org/domharrington/omit-keys-stream)

## Installation

```
npm install omit-keys-stream --save
```

## Usage
```js

var OmitKeysStream = require('./')
  , stream = new OmitKeysStream([ 'a', 'b' ])

stream.write({ a: 1, b: 2, c: 3 })

stream.on('data', function (data) {
  console.log(data) // -> { c: 3 }
})

stream.end()

```

### `var stream = OmitKeysStream(keys)`

Options must include:

- `keys` - an array of keys to omit from the object

## Credits
[Dom Harrington](https://github.com/domharrington/)
