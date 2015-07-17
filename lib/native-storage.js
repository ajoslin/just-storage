var localStorage = require('global/window').localStorage

module.exports = get
module.exports.set = set

function get (key) {
  if (!localStorage.hasOwnProperty(key)) {
    return null
  }
  var savedValue = localStorage.getItem(key)
  try {
    return JSON.parse(savedValue)
  } catch (e) {
    return savedValue
  }
}
function set (key, value) {
  if (value == null) {
    localStorage.removeItem(key)
    return null
  }

  try {
    var savedValue = JSON.stringify(value)
  } catch (e) {
    savedValue = value
  }
  localStorage.setItem(key, savedValue)
  return value
}
