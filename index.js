'use strict'

var hasNative = require('has-local-storage')
var localStorage = require('global/window').localStorage
var memoryStore = {}

var storage = hasNative ? nativeStorage : memoryStorage

module.exports = storage

storage.forKey = function (key) {
  return storage.bind(null, key)
}

function nativeStorage (key, value) {
  var savedValue
  if (arguments.length === 1) {
    savedValue = localStorage.getItem(key)
    try {
      value = JSON.parse(savedValue)
    } catch (e) {
      value = savedValue
    }

  } else if (value == null || typeof value === 'undefined') {
    localStorage.removeItem(key)

  } else {
    try {
      savedValue = JSON.stringify(value)
    } catch (e) {
      savedValue = value
    }
    localStorage.setItem(key, savedValue)
  }

  return value
}

function memoryStorage (key, value) {
  if (arguments.length === 1) {
    value = memoryStore[key]

  } else if (value == null || typeof value === 'undefined') {
    delete memoryStore[key]

  } else {
    memoryStore[key] = value
  }

  return value
}
