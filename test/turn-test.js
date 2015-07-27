const assert = require('chai').assert;
const Game   = require('../lib/game')
const _      = require('lodash')

describe('a turn', function(){

  it('can use player input to take a turn. left', function(){
    var game = new Game();
    game.board.grid[0][1].num = 2;
    game.board.grid[1][0].num = 2;
    game.takeTurn('left');
    var tileCount = _.flatten(game.board.grid).reduce(function(total, tile){
      if(tile.num === 2 || tile.num === 4){
        return total+1;
      } else {
        return total;
      }
    }, 0);
    assert.equal(tileCount, 3);
  });

  it('can use player input to take a turn, up', function(){
    var game = new Game();
    game.board.grid[0][1].num = 2;
    game.board.grid[1][0].num = 2;
    game.takeTurn('up');
    var tileCount = _.flatten(game.board.grid).reduce(function(total, tile){
      if(tile.num === 2 || tile.num === 4){
        return total+1;
      } else {
        return total;
      }
    }, 0);
    assert.equal(tileCount, 3);
  });

  it('defaults to a continue game condition', function(){
    var game = new Game();
    var condition = game.condition;
    assert.equal(condition, 'continue')
  });

  it('can detect a winning game condition', function(){
    var game = new Game();
    game.board.grid[0][0].num = 1024;
    game.board.grid[0][1].num = 1024;
    game.takeTurn('left');
    var condition = game.condition;
    assert.equal(condition, 'win')
  });

  it('can detect a losing game condition', function(){
    var game = new Game();
    game.board.grid[0][0].num = 2;
    game.board.grid[0][1].num = 32;
    game.board.grid[0][2].num = 8;
    game.board.grid[0][3].num = 4;
    game.board.grid[1][0].num = 8;
    game.board.grid[1][1].num = 2;
    game.board.grid[1][2].num = 64;
    game.board.grid[1][3].num = 8;
    game.board.grid[2][0].num = 16;
    game.board.grid[2][1].num = 8;
    game.board.grid[2][2].num = 128;
    game.board.grid[2][3].num = 4;
    game.board.grid[3][0].num = 4;
    game.board.grid[3][1].num = 16;
    game.board.grid[3][2].num = 4;
    game.board.grid[3][3].num = 2;

    game.takeTurn('left');
    var condition = game.condition;
    assert.equal(condition, 'lose')
  });

  it('can detect a continue game condition', function(){
    var game = new Game();
    game.initialize();
    game.takeTurn('left');
    var condition = game.condition;
    assert.equal(condition, 'continue')
  });

  it('can detect if game board changed', function(){
    var game = new Game();
    game.board.grid[0][3].num = 32;
    game.board.grid[1][3].num = 8;
    var sameGrid = _.clone(game.board.grid, true);
    assert.isFalse(game.didBoardChange(sameGrid)); 
  });

  it('can detect if tiles did move', function(){
    var game = new Game();
    game.board.grid[0][3].num = 32;
    game.board.grid[1][3].num = 8;
    var sameGrid = _.clone(game.board.grid, true);
    sameGrid[0][2].num = 8;
    assert.isTrue(game.didBoardChange(sameGrid)); 
  });

  it('will not add tile if board has not changed that turn', function(){
    var game = new Game();
    game.board.grid[0][3].num = 32;
    game.board.grid[1][3].num = 8;
    var originalGrid = _.clone(game.board.grid, true);
    game.takeTurn('right');
    for(var i = 0; i < 16; i++){
      assert.equal(_.flatten(originalGrid, true)[i].num, _.flatten(game.board.grid, true)[i].num); 
    };
  });

});