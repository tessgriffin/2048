const assert = require('chai').assert;
const Game   = require('../lib/game');
const _      = require('lodash')

describe('game end conditions', function(){

  it('can identify a win condition for game', function(){
    var game = new Game();
    game.board.grid[0][0].num = 2048;
    assert.isTrue(game.checkWin());  
  });

  it('can identify a non-win condition for game', function(){
    var game = new Game();
    assert.isFalse(game.checkWin());  
  });

  it('can identify a board with moves remaining, simple case', function(){
    var game = new Game();
    game.initialize();
    assert.isTrue(game.checkMoves());
  });

  it('can identify a board with moves remaining, complex case 1', function(){
    var game = new Game();
    _.times(15, function(){
      game.addTile();
    });
    assert.isTrue(game.checkMoves());
  });

  it('can identify a board with moves remaining, complex case 2', function(){
    var game = new Game();
    game.board.grid[0][0].num = 2;
    game.board.grid[0][1].num = 8;
    game.board.grid[0][2].num = 2;
    game.board.grid[0][3].num = 4;
    game.board.grid[1][0].num = 8;
    game.board.grid[1][1].num = 16;
    game.board.grid[1][2].num = 64;
    game.board.grid[1][3].num = 4;
    game.board.grid[2][0].num = 4;
    game.board.grid[2][1].num = 8;
    game.board.grid[2][2].num = 32;
    game.board.grid[2][3].num = 2;
    game.board.grid[3][0].num = 32;
    game.board.grid[3][1].num = 2;
    game.board.grid[3][2].num = 4;
    game.board.grid[3][3].num = 8;

    assert.isTrue(game.checkMoves());
  });

  it('can identify a board with no moves remaining, simple case', function(){
    var game = new Game();
    game.board.grid[0][0].num = 16;
    game.board.grid[0][1].num = 1;
    game.board.grid[0][2].num = 2;
    game.board.grid[0][3].num = 3;
    game.board.grid[1][0].num = 4;
    game.board.grid[1][1].num = 5;
    game.board.grid[1][2].num = 6;
    game.board.grid[1][3].num = 7;
    game.board.grid[2][0].num = 8;
    game.board.grid[2][1].num = 9;
    game.board.grid[2][2].num = 10;
    game.board.grid[2][3].num = 11;
    game.board.grid[3][0].num = 12;
    game.board.grid[3][1].num = 13;
    game.board.grid[3][2].num = 14;
    game.board.grid[3][3].num = 15;

    assert.isFalse(game.checkMoves());
  });

  it('can identify a board with no moves remaining, complex case', function(){
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

    assert.isFalse(game.checkMoves());
  });

});