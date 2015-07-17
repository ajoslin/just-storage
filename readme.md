# just-storage

> Just localStorage with a memory fallback.

Just a simple localStorage module that checks for not only the existance of localStorage, but also checks that localStorage is enabled in the current session.

This implementation works in cases like Safari private browsing, where every call to localStorage throws a quota exceeded error.

Also does simple JSON stringify/parse for you.

[![Sauce Test Status](https://saucelabs.com/browser-matrix/just-storage.svg)](https://saucelabs.com/u/just-storage)

[![build status](https://secure.travis-ci.org/ajoslin/just-storage.png)](http://travis-ci.org/ajoslin/just-storage)

## Install

```
$ npm install --save just-storage
```


## Usage

```js
var storage = require('just-storage')

storage.set('key', { some: 'value' }) // ==> saves and returns { some: 'value' }
storage('key') // ==> { some: 'value' }

var tokenStorage = storage.forKey('myJwt')
tokenStorage() // ==> returns current value of 'myJwt'
tokenStorage.set('19dk2924ksdf') // ==> saves new value to 'myJwt'
```

## API

#### `justStorage(key)` -> `value`

##### key

*Required*
Type: `string`

The key to load from storage.

##### Returns value

The value saved for key.

#### `justStorage.set(key, value)` -> `value`

##### key

*Required* `string`

The key you're saving to.

##### value

*Required* `any`

The value you're saving for `key`.

#### `justStorage.forKey(key)` -> `keyStorageFn`

##### `keyStorageFn()` -> `value`

Returns current saved value for `key`

##### `keyStorageFn.set(value)` -> `value`

##### value

*Required* `any`

The value you're saving for `key`.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
