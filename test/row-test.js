const assert = require('chai').assert;
const Row    = require('../lib/row');
const Tile   = require('../lib/tile');
const _      = require('lodash');

describe('row logic', function(){

  var row = []
  _.times(4,function(){
    row.push(new Tile);
  });

  it('has a row', function(){
    var newRow = new Row(row);
    newRow.row.forEach(function(tile){
      assert.instanceOf(tile, Tile);
      assert.equal(tile.num, 0);
    });
  });

  it('will not sort tiles if already sorted', function(){
    row[0].num   = 2;
    var newRow   = new Row(row).sortTiles().row;
    var expected = [2, 0, 0, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will sort 1 tile if not sorted', function(){
    row[0].num   = 0;
    row[1].num   = 2;
    var newRow   = new Row(row).sortTiles().row;
    var expected = [2, 0, 0, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will sort multiple tiles if not sorted', function(){
    row[0].num   = 0;
    row[1].num   = 8;
    row[2].num   = 0;
    row[3].num   = 256;
    var newRow   = new Row(row).sortTiles().row;
    var expected = [8, 256, 0, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will combine like tiles, simple case', function(){
    row[0].num   = 8;
    row[1].num   = 8;
    row[2].num   = 0;
    row[3].num   = 0;
    var newRow   = new Row(row).combineTiles().row;
    var expected = [16, 0, 0, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will combine like tiles, complex case', function(){
    row[0].num   = 8;
    row[1].num   = 8;
    row[2].num   = 8;
    row[3].num   = 8;
    var newRow   = new Row(row).combineTiles().row;
    var expected = [16, 0, 16, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will combine multiple like tiles', function(){
    row[0].num   = 8;
    row[1].num   = 8;
    row[2].num   = 256;
    row[3].num   = 256;
    var newRow   = new Row(row).combineTiles().row;
    var expected = [16, 0, 512, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  })

  it('will sort and combine tiles, case 1', function(){
    row[0].num   = 8;
    row[1].num   = 8;
    row[2].num   = 256;
    row[3].num   = 256;
    var newRow   = new Row(row).slideTiles().row;
    var expected = [16, 512, 0, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will sort and combine tiles, case 2', function(){
    row[0].num   = 0;
    row[1].num   = 0;
    row[2].num   = 256;
    row[3].num   = 256;
    var newRow   = new Row(row).slideTiles().row;
    var expected = [512, 0, 0, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will sort and combine tiles, case 3', function(){
    row[0].num   = 0;
    row[1].num   = 16;
    row[2].num   = 16;
    row[3].num   = 2;
    var newRow   = new Row(row).slideTiles().row;
    var expected = [32, 2, 0, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will sort and combine tiles, case 4', function(){
    row[0].num   = 16;
    row[1].num   = 0;
    row[2].num   = 0;
    row[3].num   = 16;
    var newRow   = new Row(row).slideTiles().row;
    var expected = [32, 0, 0, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will sort and combine tiles, case 5', function(){
    row[0].num   = 0;
    row[1].num   = 8;
    row[2].num   = 8;
    row[3].num   = 8;
    var newRow   = new Row(row).slideTiles().row;
    var expected = [16, 8, 0, 0];
    var rowNums  = [];
    newRow.forEach(function(tile){
      rowNums.push(tile.num); 
    });
    assert.deepEqual(expected, rowNums);
  });

  it('will update its colors', function(){
    row[0].num   = 0;
    row[1].num   = 8;
    row[2].num   = 8;
    row[3].num   = 8;
    var newRow   = new Row(row).slideTiles().row;
    var expected = ['#ff5722', '#ff8a65', '#FFFFFF', '#FFFFFF'];
    var rowColors  = [];
    newRow.forEach(function(tile){
      rowColors.push(tile.color); 
    });
    assert.deepEqual(expected, rowColors);
  });

});
