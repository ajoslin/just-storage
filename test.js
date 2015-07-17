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
