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
    for(row = 0; row < 4; row++){
      for(column = 0; column < 4; column++){
        if(grid[row][column].num === 0){ possible.push([row, column]) };
      };
    };
    if(_.size(possible) > 0){
      var sample = _.sample(possible)
      var sampleRow = sample[0];
      var sampleColumn = sample[1];
      this.board.updateTile(sampleRow, sampleColumn, 2);
    };
    return this;
  };

  this.takeTurn = function(direction){
    this.move(direction);
    this.addTile();
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

function gridMovable(originalGrid, newGrid){
  var moves = false;
  var originalNums = _.flatten(originalGrid).map(function(tile){ return tile.num });
  var newNums      = _.flatten(newGrid).map(function(tile){ return tile.num });
  for(i = 0; i < originalGrid.length; i++){
    if(originalNums[i] != newNums[i]){ moves = true };
  };
  return moves;
};

module.exports = Game;