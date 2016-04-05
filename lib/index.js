const Game = require('./game');
const $    = require('jquery');
const _    = require('lodash');

const keyCodes = {
 37: 'left',
 38: 'up',
 39: 'right',
 40: 'down'
};

window.mode = 'turing';

$(document).ready(function () {

  newGame();

  $('#new-game').on('click', function(){
    newGame();
  }); 

  $('#pokemon').on('click', function(){
    mode = 'pokemon'
    renderView(game.condition, game.board.grid);
  });
  
  $('#original').on('click', function(){
    mode = 'original'
    renderView(game.condition, game.board.grid);
  });

  $('#turing').on('click', function(){
    mode = 'turing'
    renderView(game.condition, game.board.grid);
  });

});

function newGame(){
  $('#end-game-lose').hide();
  $('#end-game-win').hide();
  window.game      = new Game();
  game.initialize();
  renderView('continue', game.board.grid);
  $(document).on('keyup', function (event) {
    var direction = keyCodes[event.keyCode];
    if (direction) { 
      game.takeTurn(direction); 
    };
    if(game.condition === 'win'){
      renderView('win', game.board.grid) 
    } else if(game.condition === 'lose'){
      renderView('lose', game.board.grid)
    };
    renderView('continue', game.board.grid)
  });
};

function renderView(condition, gameBoard){
  if(condition === 'continue'){ nextTurn(gameBoard) };
  if(condition === 'win' || condition === 'lose'){ endGame(condition) };
};

function nextTurn(gameBoard){
  var tiles = _.flatten(gameBoard);
  if(mode === 'original'){ renderOriginal(tiles) };
  if(mode === 'pokemon'){ renderPokemon(tiles) };
  if(mode === 'turing'){ renderTuring(tiles) };
};

function renderOriginal(tiles){
  for(let i = 0; i < 16; i++){
    $('#tile-'+i).css('background-color', tiles[i].color);
    if(tiles[i].num === 0){
      $('#tile-'+i).text("");
    } else{
      $('#tile-'+i).text(tiles[i].num);
      $('#tile-'+i).css("background-image", "none");
    };
  };
};

function renderPokemon(tiles){
  for(let i = 0; i < 16; i++){
    if(tiles[i].num === 0){
      $('#tile-'+i).css("background-color", "#fff");
      $('#tile-'+i).css("background-image", "none");
    } else{
      $('#tile-'+i).css('background-image', 'url(' + tiles[i].pokemon + ')');
      $('#tile-'+i).text("");
    };
  };
};

function renderTuring(tiles){
  for(let i = 0; i < 16; i++){
    if(tiles[i].num === 0){
      $('#tile-'+i).css("background-color", "#fff");
      $('#tile-'+i).css("background-image", "none");
    } else{
      $('#tile-'+i).css('background-image', 'url(' + tiles[i].face + ')');
      $('#tile-'+i).text("");
    };
  };
};

function endGame(condition){
  if(condition === 'lose'){
    $('#end-game-lose').show();
  } else if(condition === 'win'){
    $('#end-game-win').show();
  };
};