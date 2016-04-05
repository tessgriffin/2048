require('../tile')

function Row(data){
  
  this.row = data;

  this.slideTiles = function(){
    return this.sortTiles().combineTiles().sortTiles().updateColors();
  };

  this.sortTiles = function(){
    for(var i = 0; i < this.row.length-1; i++){
      var left   = this.row[i];
      var right  = this.row[i+1];
      if(left.num === 0 && right.num > 0){
        this.row[i]   = right;
        this.row[i+1] = left;
        i = -1;
      };
    };
    return this;
  };

  this.combineTiles = function(){
    for(var i = 0; i < this.row.length-1; i++){
      var left = this.row[i];
      var right = this.row[i+1];
      if(left.num === right.num){
        this.row[i].num = left.num + right.num;
        this.row[i+1].num = 0;
      };
    };
    return this;
  };

  this.updateColors = function(){
    for(var i = 0; i < 4; i++){
      this.row[i].updateColor();
    }
    return this;
  };

};

module.exports = Row;
