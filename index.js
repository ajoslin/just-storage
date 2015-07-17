'use strict'
var memoryStore = {}
var window = require('global/window')

module.exports = hasNativeStorage() ? nativeStorage : memoryStorage

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

function nativeStorage (key, value) {
  console.log('native', key, value)
  var savedValue
  if (arguments.length === 1) {
    savedValue = window.localStorage.getItem(key)
    try {
      value = JSON.parse(savedValue)
    } catch (e) {
      value = savedValue
    }

  } else if (value == null || typeof value === 'undefined') {
    window.localStorage.removeItem(key)

  } else {
    try {
      savedValue = JSON.stringify(value)
    } catch (e) {
      savedValue = value
    }
    window.localStorage.setItem(key, savedValue)
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
