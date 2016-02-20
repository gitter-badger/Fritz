'use strict';

var assert = require('assert');
var path = require('path');
var _ = require('lodash');
var $p = require('nodep')();

$p.init({
    assert: assert,
    path: path,
    _: _
}).init('test/**/*');
