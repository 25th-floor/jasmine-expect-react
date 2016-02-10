const factory = require('jasmine-expect/src/lib/factory');

const Component = require('react').Component;
Component.prototype.jasmineToString = function() {
	return this.constructor.displayName || this.constructor.name;
};

const matchers = {

};

for (var matcherName in matchers) {
	factory(matcherName, matchers[matcherName]);
}

module.exports = matchers;
