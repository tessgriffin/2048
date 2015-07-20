const assert = require('chai').assert;
const Tile = require('../lib/tile')


describe('tile', function(){

  it('should exist', function(){
    assert(Tile);
  });

  it('is a object', function(){
    assert(new Tile());
  });

  it('has an defaults value of 0', function(){
    var tile = new Tile();
    assert.equal(tile.num, 0);
  });

  it('can have its value changed', function(){
    var tile = new Tile();
    tile.num = 2;
    assert.equal(tile.num, 2);
  });

  it('has a color of FFFFFF when its value is 0', function(){
    var tile = new Tile();
    assert.equal(tile.color, 'FFFFFF');
  });

});
