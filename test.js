'use strict'

var storage = require('./')
var test = require('tape')

test('save load and delete string', function (t) {
  t.equal(storage.set('k', 'v'), 'v')
  t.equal(storage('k'), 'v')
  storage.set('k', null)
  t.equal(storage('k'), null)
  t.end()
})

test('save and load and delete object', function (t) {
  t.deepEqual(storage.set('k', { a: 1 }), { a: 1 })
  t.deepEqual(storage('k'), { a: 1 })
  storage.set('k', null)
  t.equal(storage('k'), null)
  t.end()
})

test('.forKey save load and delete string', function (t) {
  var colorStorage = storage.forKey('color')
  t.equal(colorStorage.set('v'), 'v')
  t.equal(colorStorage(), 'v')
  colorStorage.set(null)
  t.equal(colorStorage(), null)
  t.end()
})

test('.forKey save and load and delete object', function (t) {
  var colorStorage = storage.forKey('color')
  t.deepEqual(colorStorage.set({ value: '2' }), { value: '2' })
  t.deepEqual(colorStorage(), { value: '2' })
  colorStorage.set(null)
  t.equal(colorStorage(), null)
  t.end()
})
