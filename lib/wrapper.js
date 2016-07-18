"use strict";

module.exports = function(memcached) {
	return new Wrapper(memcached);
};

function Wrapper(memcached) {
	this.memcached = memcached;
}

Wrapper.prototype.get = function(key, callback) {
	this.memcached.get(key, callback);
};

Wrapper.prototype.set = function(key, bucket, callback) {
	this.memcached.set(key, bucket, 0, callback);
}