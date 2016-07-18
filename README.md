# express-throttle-memcached
Memcached wrapper for express-throttle

[![npm version](https://badge.fury.io/js/express-throttle-memcached.svg)](https://badge.fury.io/js/express-throttle-memcached)

## Installation

```bash
$ npm install express-throttle-memcached
```

## Usage

```js
var express = require("express");
var throttle = require("express-throttle");
var memcached = require("memcached");
var MemcachedStore = require("express-throttle-memcached");

var app = express();

// Rolling window
app.post("/search", throttle({
  "burst": 10,
	"rate": "5/s",
	"store": new MemcachedStore(new Memcached())
}), function(req, res, next) {
	// ...
});

// Fixed window
app.post("/search", throttle({
  "burst": 10,
  "period": "1min",
  "store": new MemcachedStore(new Memcached())
}), function(req, res, next) {
  // ...
});
```

Neither `express-throttle` nor this package will expire / remove / cleanup any keys. This means that memory usage will grow unbounded as new requests are being processed. Thus, it is recommended to have a separate memcached instance only for throttling purposes with a sensible memory limit. Consult the [Memcached documentation](https://github.com/memcached/memcached/wiki/ConfiguringServer) for more information.
