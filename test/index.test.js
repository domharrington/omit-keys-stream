var OmitKeysStream = require('../')
  , concat = require('concat-stream')
  , assert = require('assert')

describe('omit-keys-stream', function () {

  it('should throw if no keys provided', function () {
    assert.throws(function () {
      var test = new OmitKeysStream()
      test.end()
    }, /`keys` are required/)
  })

  it('should omit specified keys', function (done) {
    var stream = new OmitKeysStream([ 'a', 'b', 'c' ])
      , write

    write = concat(function (data) {
      assert.deepEqual(data[0], { d: 4, e: 5 })
      done()
    })

    stream.write({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    stream.pipe(write)
    stream.end()
  })

})
