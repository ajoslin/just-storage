# just-storage

> Just localStorage with a memory fallback.

Just a simple localStorage module that checks for not only the existance of localStorage, but also checks that localStorage is enabled in the current session.

This implementation works in cases like Safari private browsing, where every call to localStorage throws a quota exceeded error.

Also does simple JSON stringify/parse for you.

## Install

```
$ npm install --save just-storage
```


## Usage

```js
var storage = require('just-storage')

storage('key', { some: 'value' }) // ==> saves and returns { some: 'value' }
storage('key') // ==> { some: 'value' }

var tokenStorage = storage.forKey('myJwt')
tokenStorage() // ==> returns current value of 'myJwt'
tokenStorage('19dk2924ksdf') // ==> saves new value to 'myJwt'
```

## API

#### `justStorage(key, [value])` -> `value`

##### key

*Required* `string`

The key to save or load from storage.

##### value

*Optional* `any`

If given, will save `value` under `key` and return `value`. Otherwise, will load `key` and return its value.

#### `justStorage.forKey(key)` -> `storageFn`

##### key

*Required* `string`

The key to bind the returned storage function to.

##### Returns storageFn([value])

*Optional* `any`

If given, saves `value` under key and return `value`. Otherwise, will load `key` and return its value.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
