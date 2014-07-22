var OmitKeysStream = require('./')
  , stream = new OmitKeysStream([ 'a', 'b' ])

stream.write({ a: 1, b: 2, c: 3 })

stream.on('data', function (data) {
  console.log(data) // -> { c: 3 }
})

stream.end()
