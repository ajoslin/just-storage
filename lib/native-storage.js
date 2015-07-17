var window = require('global/window')

module.exports = get
module.exports.set = set

function get (key) {
  if (!window.localStorage.hasOwnProperty(key)) {
    return null
  }
  var savedValue = window.localStorage.getItem(key)
  try {
    return JSON.parse(savedValue)
  } catch (e) {
    return savedValue
  }
}
function set (key, value) {
  if (value == null || typeof value === 'undefined') {
    window.localStorage.removeItem(key)
    return null
  }

  try {
    var savedValue = JSON.stringify(value)
  } catch (e) {
    savedValue = value
  }
  window.localStorage.setItem(key, savedValue)
  return value
}
