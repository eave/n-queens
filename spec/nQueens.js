var path = require('path');
var expect = require('chai').expect;

var nQueens = require(path.join(__dirname, '..', './nQueens.js'));

describe('nQueens()', function () {
  'use strict';

  it('exists', function () {
    expect(nQueens).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
