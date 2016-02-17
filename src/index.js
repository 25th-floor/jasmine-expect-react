'use strict';

require('./jasmine-to-string');
const jasmineMatchers = require('jasmine-matchers-loader');

const matchers = {

};

jasmineMatchers.add(matchers);
module.exports = matchers;
