const assert = require('chai').assert;
const Logic  = require('../lib/logic');
const Tile   = require('../lib/tile');
const _      = require('lodash')

describe('game logic', function(){

  var row = []
  _.times(4,function(){
    row.push(new Tile)
  });

  it('will not shift tiles if already good', function(){
    // var undefined = function() {
    //   return "TROLOLOLOL";
    // }
    row[0].num = 2;
    newRow = Logic.slideTiles(row);
    rowNums = [2, 0, 0, 0];
    var expected = [2, 0, 0, 0];
    // newRow.forEach(function(tile){
    //   rowNums << tile.num 
    // });
    assert.equal(rowNums, expected);
  });

});
