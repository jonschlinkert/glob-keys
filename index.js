/*!
 * glob-keys <https://github.com/jonschlinkert/glob-keys>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var path = require('path');
var methods = require('method-names');
var glob = require('matched');

module.exports = function(patterns, options) {
  options = options || {};
  var files = glob.sync(patterns, options);
  var cwd = options.cwd || process.cwd();
  var len = files.length;
  var idx = -1;

  var keys = [];

  while (++idx < len) {
    var file = path.resolve(cwd, files[idx]);
    if (!/\.js$/.test(file)) {
      continue;
    }
    keys.push.apply(keys, Object.keys(require(file)));
  }
  return keys;
};
