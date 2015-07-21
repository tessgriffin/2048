const assert = require('chai').assert;
const Board  = require('../lib/board');
const Tile   = require('../lib/tile');
const Game   = require('../lib/game');
const _      = require('lodash');

describe('the game play', function(){

  it('can add a random tile with num of 2 to board', function(){
    var game      = new Game();
    game.addTile();
    var tileCount = _.flatten(game.board.grid).reduce(function(total, tile){
      if(tile.num === 2){
        return total+1;
      } else {
        return total;
      }
    }, 0);
    assert.equal(tileCount, 1);
  });

  it('can add a random tile to an almost full board', function(){
    var game     = new Game();
    game.board.grid.forEach(function(row){
      row.forEach(function(tile){
        tile.num = 2;
      });
    });
    game.board.grid[0][0].num = 0;
    game.addTile();
    var tileCount = _.flatten(game.board.grid).reduce(function(total, tile){
      if(tile.num === 2){
        return total+1;
      } else {
        return total;
      }
    }, 0);
    assert.equal(tileCount, 16);
  });

  it('can initialize a board with 2 tiles with num of 2', function(){
    var game      = new Game();
    game.initialize();
    var tileCount = _.flatten(game.board.grid).reduce(function(total, tile){
      if(tile.num === 2){
        return total+1;
      } else {
        return total;
      }
    }, 0);
    assert.equal(tileCount, 2);
  });

  it('will slide game left, simple case', function(){
    var game     = new Game();
    game.board.grid[0][0].num = 2;
    game.board.grid[0][1].num = 2;
    game.move('left');
    var expected = [4,0,0,0];
    var rowNums  = [];
    game.board.grid[0].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)
  });

  it('will slide game left, complex case', function(){
    var game     = new Game();
    game.board.grid[0][0].num = 2;
    game.board.grid[0][1].num = 2;
    game.board.grid[0][2].num = 2;
    game.board.grid[1][1].num = 4;
    game.board.grid[2][0].num = 8;
    game.board.grid[2][1].num = 8;
    game.board.grid[2][2].num = 8;
    game.board.grid[2][3].num = 8;
    game.board.grid[3][1].num = 256;
    game.board.grid[3][3].num = 2;
    
    game.move('left');

    var expected = [4,2,0,0];
    var rowNums  = [];
    game.board.grid[0].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [4,0,0,0];
    var rowNums  = [];
    game.board.grid[1].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [16,16,0,0];
    var rowNums  = [];
    game.board.grid[2].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [256,2,0,0];
    var rowNums  = [];
    game.board.grid[3].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)
  });

  it('will slide game up, simple case', function(){
    var game     = new Game();
    game.board.grid[0][0].num = 2;
    game.board.grid[1][0].num = 2;
    game.move('up');
    var expected = [4,0,0,0];
    var rowNums  = [];
    game.board.grid[0].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)
  });

  it('will slide game up, complex case', function(){
    var game     = new Game();
    game.board.grid[0][1].num = 2;
    game.board.grid[0][2].num = 2;
    game.board.grid[1][0].num = 4;
    game.board.grid[1][1].num = 4;
    game.board.grid[1][2].num = 2;
    game.board.grid[2][0].num = 4;
    game.board.grid[2][1].num = 2;
    game.board.grid[2][3].num = 4;
    game.board.grid[3][2].num = 2;
    
    game.move('up');

    var expected = [8,2,4,4];
    var rowNums  = [];
    game.board.grid[0].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [0,4,2,0];
    var rowNums  = [];
    game.board.grid[1].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [0,2,0,0];
    var rowNums  = [];
    game.board.grid[2].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [0,0,0,0];
    var rowNums  = [];
    game.board.grid[3].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)
  });

  it('will slide game down, simple case', function(){
    var game     = new Game();
    game.board.grid[0][0].num = 2;
    game.board.grid[1][0].num = 2;
    game.move('down');
    var expected = [4,0,0,0];
    var rowNums  = [];
    game.board.grid[3].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)
  });

  it('will slide game down, complex case', function(){
    var game     = new Game();
    game.board.grid[0][1].num = 2;
    game.board.grid[0][2].num = 2;
    game.board.grid[1][0].num = 4;
    game.board.grid[1][1].num = 4;
    game.board.grid[1][2].num = 2;
    game.board.grid[2][0].num = 4;
    game.board.grid[2][1].num = 2;
    game.board.grid[2][3].num = 4;
    game.board.grid[3][2].num = 2;
    
    game.move('down');

    var expected = [0,0,0,0];
    var rowNums  = [];
    game.board.grid[0].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [0,2,0,0];
    var rowNums  = [];
    game.board.grid[1].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [0,4,2,0];
    var rowNums  = [];
    game.board.grid[2].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [8,2,4,4];
    var rowNums  = [];
    game.board.grid[3].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)
  });

  it('will slide game right, simple case', function(){
    var game     = new Game();
    game.board.grid[0][0].num = 2;
    game.board.grid[0][1].num = 2;
    game.move('right');
    var expected = [0,0,0,4];
    var rowNums  = [];
    game.board.grid[0].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)
  });

  it('will slide game right, complex case', function(){
    var game     = new Game();
    game.board.grid[0][0].num = 2;
    game.board.grid[0][1].num = 2;
    game.board.grid[0][2].num = 2;
    game.board.grid[1][1].num = 4;
    game.board.grid[2][0].num = 8;
    game.board.grid[2][1].num = 8;
    game.board.grid[2][2].num = 8;
    game.board.grid[2][3].num = 8;
    game.board.grid[3][1].num = 256;
    game.board.grid[3][3].num = 2;
    
    game.move('right');

    var expected = [0,0,2,4];
    var rowNums  = [];
    game.board.grid[0].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [0,0,0,4];
    var rowNums  = [];
    game.board.grid[1].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [0,0,16,16];
    var rowNums  = [];
    game.board.grid[2].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)

    var expected = [0,0,256,2];
    var rowNums  = [];
    game.board.grid[3].forEach(function(tile){
      rowNums.push(tile.num);
    });
    assert.deepEqual(rowNums, expected)
  });

});