const Board = require('../board');
const Tile  = require('../tile');
const Row   = require('../row');
const _     = require('lodash');
require('../tile');


function Game(){
  
  this.board     = new Board();
  this.condition = 'continue';

  this.initialize = function(){
    _.times(2,function(){
      this.addTile();
    }.bind(this));
    return this;
  };

  this.move = function(direction){
    this.board.transposeGrid(direction);
    this.board.grid.map(function(rowData){
      var row = new Row(rowData);
      return row.slideTiles().row;
    });
    this.board.normalizeGrid(direction);
    return this;
  };

  this.addTile = function(){
    var possible = [];
    var grid     = this.board.grid
    for(var row = 0; row < 4; row++){
      for(var column = 0; column < 4; column++){
        if(grid[row][column].num === 0){ possible.push([row, column]) };
      };
    };
    var startValue = _.sample([2,2,2,4]);
    if(_.size(possible) > 0){
      var sample = _.sample(possible)
      var sampleRow = sample[0];
      var sampleColumn = sample[1];
      this.board.updateTile(sampleRow, sampleColumn, startValue);
    };
    return this;
  };

  this.takeTurn = function(direction){
    var previousGrid = _.cloneDeep(this.board.grid);
    this.move(direction);
    var moved = this.didBoardChange(previousGrid)
    if(moved){ this.addTile() };
    if(this.checkWin())   { this.condition = 'win' }
    if(!this.checkMoves()){ this.condition = 'lose' }
    return this;
  };

  this.checkWin = function(){
    var win   = false; 
    var tiles = _.flatten(this.board.grid); 
    tiles.forEach(function(tile){
      if(tile.num === 2048){ win = true };
    });
    return win;
  };

  this.checkMoves = function(){
    var movesRemain   = false;
    var originalGrid  = _.clone(this.board.grid, true);
    var directions    = ['left', 'up', 'right', 'down'];
    directions.forEach(function(direction){
      var newGrid = this.move(direction).board.grid
      if(gridMovable(originalGrid, newGrid)){ movesRemain = true };
    }.bind(this));
    this.board.grid = originalGrid;
    return movesRemain;
  };

};

Game.prototype.didBoardChange = function(grid){
  var changed      = false;
  var previousGrid = _.flatten(grid, true);
  var currentGrid  = _.flatten(this.board.grid, true);
  for(var i = 0; i < 16; i++){
    if(currentGrid[i].num != previousGrid[i].num ){ changed = true };
  };
  return changed;
};

function gridMovable(originalGrid, newGrid){
  var moves = false;
  var originalNums = _.flatten(originalGrid).map(function(tile){ return tile.num });
  var newNums      = _.flatten(newGrid).map(function(tile){ return tile.num });
  for(var i = 0; i < originalGrid.length; i++){
    if(originalNums[i] != newNums[i]){ moves = true };
  };
  return moves;
};

module.exports = Game;