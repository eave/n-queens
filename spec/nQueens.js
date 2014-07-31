/* global nQueens, describe, it, expect, should */

describe('nQueensBit()', function () {
  'use strict';

  it('exists', function () {
    expect(nQueensBit).to.be.a('function');

  });

  it('should solve for n = 0', function () {
    expect(nQueensBit(0)).to.equal(1);
  });

  it('should solve for n = 2', function () {
    expect(nQueensBit(2)).to.equal(0);
  });

  it('should solve for n = 4', function () {
    expect(nQueensBit(4)).to.equal(2);
  });

  it('should solve for n = 8', function () {
    expect(nQueensBit(8)).to.equal(92);
  });

  it('should solve for n = 12', function () {
    expect(nQueensBit(12)).to.equal(14200);
  });

});

describe('nQueensHash()', function () {
  'use strict';

  it('exists', function () {
    expect(nQueensHash).to.be.a('function');

  });

  it('should solve for n = 0', function () {
    expect(nQueensHash(0)).to.equal(1);
  });

  it('should solve for n = 2', function () {
    expect(nQueensHash(2)).to.equal(0);
  });

  it('should solve for n = 4', function () {
    expect(nQueensHash(4)).to.equal(2);
  });

  it('should solve for n = 8', function () {
    expect(nQueensHash(8)).to.equal(92);
  });

  it('should solve for n = 12', function () {
    expect(nQueensHash(12)).to.equal(14200);
  });

});
