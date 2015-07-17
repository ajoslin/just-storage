'use strict'
var window = require('global/window')

var storage = hasNativeStorage() ?
      require('./lib/native-storage') :
      require('./lib/memory-storage')

module.exports = storage

storage.forKey = function (key) {
  var forKey = storage.bind(null, key)
  forKey.set = storage.set.bind(null, key)

  return forKey
}

function hasNativeStorage () {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      var testKey = '__testKey'
      window.localStorage.setItem(testKey, testKey)
      window.localStorage.removeItem(testKey)
      return true
    } catch (e) {}
  }
  return false
}
