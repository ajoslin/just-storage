# just-storage

> Just localStorage with a memory fallback.

Just a simple localStorage module that not checks for not only the existance of localStorage, but also checks that localStorage is enabled in the current session.

This implementation works in cases like Safari private browsing, where every call to localStorage throws a quota exceeded error.

Also does simple JSON stringify/parse for you, as well.

## Install

```
$ npm install --save just-storage
```


## Usage

```js
var storage = require('just-storage')

storage('key', { some: 'value' }) // ==> saves { some: 'value' }
storage('key') // ==> { some: 'value' }
```

## API

#### `justStorage(key, [value])` -> `value`

##### key

*Required*
Type: `string`

The key to save or load from storage.

##### value

*Optional*
Type: `string`

If provided, will save `value` under `key`. If not provided, will load `key` and return its value.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
