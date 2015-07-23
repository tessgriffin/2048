const tileColors     = {   0: "#FFFFFF",   2: "#fce4ec",    4: "#f8bbd0",    8: "#f48fb1",
                          16: "#ff80ab",  32: "#ff4081",   64: "#f06292",  128: "#ec407a", 
                         256: "#e91e63", 512: "#d81b60", 1024: "#ad1457", 2048: "#880e4f" }


function Tile(){
  this.num = 0;
  this.color = '#FFFFFF';
  
  this.updateColor = function(){
    this.color = tileColors[this.num];
    return this;
  };
}



module.exports = Tile;
