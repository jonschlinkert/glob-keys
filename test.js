'use strict';

require('mocha');
var assert = require('assert');
var globKeys = require('./');

describe('globKeys', function() {
  it('should create an array of keys from a glob of files', function() {
    var keys = globKeys('fixtures/*.js');
    assert.deepEqual(keys.sort(), ['bar', 'baz', 'qux', 'fez', 'foo', 'abc', 'xyz'].sort());
  });

  it('should not choke when no keys exist', function() {
    var keys = globKeys('fixtures/slslslslls.js');
    assert.deepEqual(keys, []);
  });
});
