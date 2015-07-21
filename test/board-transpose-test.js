const assert = require('chai').assert;
const Board  = require('../lib/board');
const Tile   = require('../lib/tile');
const _      = require('lodash');

describe('transposing the board', function(){

  var board 
  var grid

  beforeEach(function(){
    board = new Board();
    grid  = board.grid;
  
    for(i = 0; i < grid.length; i++){
      grid[i][0].num   = 0 + (i*4);
      grid[i][1].num = 1 + (i*4);
      grid[i][2].num = 2 + (i*4);
      grid[i][3].num = 3 + (i*4);
    };
  });

  describe('no transposition', function(){

    it('the first row', function(){
      var expected   = [0,1,2,3];
      var rowNums    = []; 
      grid[0].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the second row', function(){
      var expected   = [4,5,6,7];
      var rowNums    = []; 
      grid[1].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the third row', function(){
      var expected   = [8,9,10,11];
      var rowNums    = []; 
      grid[2].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the fourth row', function(){
      var expected   = [12,13,14,15];
      var rowNums    = []; 
      grid[3].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

  });

  describe('the transposition for press up', function(){

    it('the first row', function(){
      var transposed = board.transposeGrid('up');
      var expected   = [0,4,8,12];
      var rowNums    = []; 
      transposed.grid[0].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the second row', function(){
      var transposed = board.transposeGrid('up');
      var expected   = [1,5,9,13];
      var rowNums    = []; 
      transposed.grid[1].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the third row', function(){
      var transposed = board.transposeGrid('up');
      var expected   = [2,6,10,14];
      var rowNums    = []; 
      transposed.grid[2].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the fourth row', function(){
      var transposed = board.transposeGrid('up');
      var expected   = [3,7,11,15];
      var rowNums    = []; 
      transposed.grid[3].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the first row', function(){
      var normalized = board.transposeGrid('up').normalizeGrid('up');
      var expected   = [0,1,2,3];
      var rowNums    = []; 
      normalized.grid[0].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the second row', function(){
      var normalized   = board.transposeGrid('up').normalizeGrid('up');
      var expected     = [4,5,6,7];
      var rowNums      = []; 
      normalized.grid[1].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the third row', function(){
      var normalized   = board.transposeGrid('up').normalizeGrid('up');
      var expected     = [8,9,10,11];
      var rowNums      = []; 
      normalized.grid[2].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the fourth row', function(){
      var normalized   = board.transposeGrid('up').normalizeGrid('up');
      var expected     = [12,13,14,15];
      var rowNums      = []; 
      normalized.grid[3].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

  });

  describe('the transposition for press down', function(){

    it('the first row', function(){
      var transposed = board.transposeGrid('down');
      var expected   = [12,8,4,0];
      var rowNums    = []; 
      transposed.grid[0].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the second row', function(){
      var transposed = board.transposeGrid('down');
      var expected   = [13,9,5,1]
      var rowNums    = []; 
      transposed.grid[1].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the third row', function(){
      var transposed = board.transposeGrid('down');
      var expected   = [14,10,6,2]
      var rowNums    = []; 
      transposed.grid[2].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the fourth row', function(){
      var transposed = board.transposeGrid('down');
      var expected   = [15,11,7,3]
      var rowNums    = []; 
      transposed.grid[3].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the first row', function(){
      var normalized     = board.transposeGrid('down').normalizeGrid('down');
      var expected       = [0,1,2,3];
      var rowNums        = []; 
      normalized.grid[0].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the second row', function(){
      var normalized   = board.transposeGrid('down').normalizeGrid('down');
      var expected     = [4,5,6,7];
      var rowNums      = []; 
      normalized.grid[1].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the third row', function(){
      var normalized   = board.transposeGrid('down').normalizeGrid('down');
      var expected     = [8,9,10,11];
      var rowNums      = []; 
      normalized.grid[2].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the fourth row', function(){
      var normalized   = board.transposeGrid('down').normalizeGrid('down');
      var expected     = [12,13,14,15];
      var rowNums      = []; 
      normalized.grid[3].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

  });

  describe('the transposition for press right', function(){

    it('the first row', function(){
      var transposed = board.transposeGrid('right');
      var expected   = [3,2,1,0];
      var rowNums    = []; 
      transposed.grid[0].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the second row', function(){
      var transposed = board.transposeGrid('right');
      var expected   = [7,6,5,4]
      var rowNums    = []; 
      transposed.grid[1].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the third row', function(){
      var transposed = board.transposeGrid('right');
      var expected   = [11,10,9,8]
      var rowNums    = []; 
      transposed.grid[2].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('the fourth row', function(){
      var transposed = board.transposeGrid('right');
      var expected   = [15,14,13,12]
      var rowNums    = []; 
      transposed.grid[3].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the first row', function(){
      var normalized     = board.transposeGrid('right').normalizeGrid('right');
      var expected       = [0,1,2,3];
      var rowNums        = []; 
      normalized.grid[0].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the second row', function(){
      var normalized   = board.transposeGrid('right').normalizeGrid('right');
      var expected     = [4,5,6,7];
      var rowNums      = []; 
      normalized.grid[1].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the third row', function(){
      var normalized   = board.transposeGrid('right').normalizeGrid('right');
      var expected     = [8,9,10,11];
      var rowNums      = []; 
      normalized.grid[2].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

    it('can transpose back to original, the fourth row', function(){
      var normalized   = board.transposeGrid('right').normalizeGrid('right');
      var expected     = [12,13,14,15];
      var rowNums      = []; 
      normalized.grid[3].forEach(function(tile){
        rowNums.push(tile.num); 
      });
      assert.deepEqual(rowNums, expected);
    });

  });

  describe('the transposition for press left', function(){

    it('does not transpose for press left', function(){
      var originalGrid = grid;
      board.transposeGrid('left');
      assert.deepEqual(board.grid, originalGrid); 
    });

    it('does not normalize for press left', function(){
      var originalGrid = grid;
      board.transposeGrid('left').normalizeGrid('left');
      assert.deepEqual(board.grid, originalGrid); 
    });

  });

});