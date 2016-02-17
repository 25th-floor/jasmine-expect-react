'use strict';

const Component = require('react').Component;
module.exports = Component.prototype.jasmineToString = function() {
	return this.constructor.displayName || this.constructor.name;
};
