'use strict'

var hasStorage = false
try {
  var KEY = '__JUST-STORAGE'
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem(KEY, KEY)
    window.localStorage.removeItem(KEY)
    hasStorage = true
  }
} catch (_) {}

var storage = hasStorage
  ? require('./native-storage')
  : require('./memory-storage')

module.exports = storage

storage.default = storage

storage.forKey = function (key) {
  var forKey = storage.bind(null, key)
  forKey.set = storage.set.bind(null, key)

  return forKey
}
