const assert = require('chai').assert;
const Game   = require('../lib/game')
const _      = require('lodash')

describe('a turn', function(){

  it('can use player input to take a turn', function(){
    var game = new Game();
    game.board.grid[0][0].num = 2;
    game.board.grid[1][0].num = 2;
    game.takeTurn('left');
    var tileCount = _.flatten(game.board.grid).reduce(function(total, tile){
      if(tile.num === 2){
        return total+1;
      } else {
        return total;
      }
    }, 0);
    assert.equal(tileCount, 3);

  });

});