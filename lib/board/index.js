const Tile = require('../tile')
const _ = require('lodash');

var tileColors = {0: "FFFFFF", 2: "fce4ec", 4: "f8bbd0", 8: "f48fb1",
                  16: "ff80ab", 32: "ff4081", 64: "f06292",
                  128: "ec407a", 256: "e91e63", 512: "d81b60",
                  1024: "ad1457", 2048: "880e4f"}

function Board(){
  var board = this.grid = [];
  _.times(4, function(){
    board.push(getRow());
  });

  this.updateTile = function(row, col, num) {
    var tile = this.grid[row][col];
    tile.num = num;
    tile.color = tileColors[num];
    return tile;
  }
};

function getRow(){
  var row = [];
  _.times(4, function(){
    row.push(new Tile());
  });
  return row;
};

module.exports = Board;