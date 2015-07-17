var store = {}

module.exports = get
module.exports.set = set

function get (key) {
  if (store.hasOwnProperty(key)) {
    return store[key]
  } else {
    return null
  }
}

function set (key, value) {
  if (value == null) {
    delete store[key]
    return null
  }

  store[key] = value
  return value
}
