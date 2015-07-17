'use strict'

var nodeLocalStorage = require('node-localstorage')
var window = require('global/window')
var storage = require('./')
var test = require('tape')

window.localStorage = nodeLocalStorage

test('save load and delete string', function (t) {
  t.equal(storage('k', 'v'), 'v')
  t.equal(storage('k'), 'v')
  storage('k', null)
  t.equal(storage('k'), undefined)
  t.end()
})

test('save and load and delete object', function (t) {
  t.deepEqual(storage('k', { a: 1 }), { a: 1 })
  t.deepEqual(storage('k'), { a: 1 })
  storage('k', null)
  t.equal(storage('k'), undefined)
  t.end()
})

test('forKey save load and delete string', function (t) {
  var colorStorage = storage.forKey('color')
  t.equal(colorStorage('v'), 'v')
  t.equal(colorStorage('v'), 'v')
  colorStorage(null)
  t.equal(colorStorage(), undefined)
  t.end()
})

test('.forKey save and load and delete object', function (t) {
  var colorStorage = storage.forKey('color')
  t.deepEqual(colorStorage({ value: '2' }), { value: '2' })
  t.deepEqual(colorStorage(), { value: '2' })
  colorStorage(null)
  t.equal(colorStorage(), undefined)
  t.end()
})
