const Game = require('./game');
const $    = require('jquery');
const _    = require('lodash');

const keyCodes = {
 37: 'left',
 38: 'up',
 39: 'right',
 40: 'down'
}

$(document).ready(function () {
  var game      = new Game();
  game.initialize();
  renderView('continue', game.board.grid)

  $(document).on('keyup', function (event) {
    var direction = keyCodes[event.keyCode];
    
    if (direction) { 
      game.condition = game.takeTurn(direction); 
    };
    
    if(game.condition === 'win'){
      renderView('win', game.board.grid) 
    } else if(game.condition === 'lose'){
      renderView('lose', game.board.grid)
    };

    renderView('continue', game.board.grid)

  });

})

function renderView(condition, gameBoard){
  console.log("Start");
  var tiles = _.flatten(gameBoard);
  for(let i = 0; i < 16; i++){
    $('#tile-'+i).css('background-color', tiles[i].color);
    if(tiles[i].num === 0){
      $('#tile-'+i).text("");
    } else{
      $('#tile-'+i).text(tiles[i].num);
    };
  };
};

