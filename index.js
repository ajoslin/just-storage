'use strict'
var storage = require('has-local-storage') ?
      require('./lib/native-storage') :
      require('./lib/memory-storage')

module.exports = storage

storage.forKey = function (key) {
  var forKey = storage.bind(null, key)
  forKey.set = storage.set.bind(null, key)

  return forKey
}
