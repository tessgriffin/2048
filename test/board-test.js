const assert = require('chai').assert;
const Board  = require('../lib/board');
const Tile   = require('../lib/tile');

describe('the board', function(){

  it('is an object', function(){
    assert(new Board());
  });

  it('has a board array made up of 4 arrays', function(){
    var board = new Board();
    assert.equal(board.grid.length, 4);
    board.grid.forEach(function(row){
      assert(Array.isArray(row));
    });
  });

  it('has a grid made up of tiles', function(){
    var board = new Board();
    var row = board.grid[0];
    row.forEach(function(tile){
      assert.instanceOf(tile, Tile)
    });
  });

  it('can update the value and color of a tile', function(){
    var board = new Board();
    assert.equal(board.grid[0][0].num, 0);
    var tile = board.updateTile(0, 0, 2);

    assert.equal(tile.num, 2);
    assert.equal(tile.color, '#fce4ec');

    tile = board.updateTile(0, 0, 0);

    assert.equal(tile.num, 0);
    assert.equal(tile.color, '#FFFFFF');

    tile = board.updateTile(0, 0, 4);

    assert.equal(tile.num, 4);
    assert.equal(tile.color, '#f8bbd0');
  });

});