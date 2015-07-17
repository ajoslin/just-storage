var store = {}

module.exports = get
module.exports.set = set

function get (key) {
  return store[key]
}

function set (key, value) {
  if (value == null || typeof value === 'undefined') {
    delete store[key]
    return null
  }

  store[key] = value
  return value
}
