const Board = require('../board');
const Row   = require('../row');
const _     = require('lodash');
require('../tile');


function Game(){
  
  this.board = new Board();

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
    var row    = _.random(3);
    var column = _.random(3);
    var tile   = this.board.grid[row][column];
    if(tile.num === 0){
      this.board.updateTile(row, column, 2);
      return this;
    } else {
      return this.addTile();
    };
  };

  this.takeTurn = function(direction){
    this.move(direction);
    this.addTile();
  };

};

module.exports = Game;