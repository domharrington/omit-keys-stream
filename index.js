module.exports = OmitKeysStream

var TransformStream = require('stream').Transform
  , util = require('util')
  , omit = require('lodash.omit')

function OmitKeysStream(keys) {
  if (!keys) throw new Error('`keys` are required')

  this.keys = keys
  TransformStream.call(this, { objectMode: true })
}

util.inherits(OmitKeysStream, TransformStream)

OmitKeysStream.prototype._transform = function (chunk, encoding, done) {
  done(null, omit(chunk, this.keys))
}
