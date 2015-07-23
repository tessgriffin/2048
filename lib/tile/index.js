const tileColors     = {   0: "#FFFFFF",   2: "#e57373",    4: "#b71c1c",    8: "#ff8a65",
                          16: "#ff5722",  32: "#fff176",   64: "#ffc107",  128: "#81c784", 
                         256: "#1b5e20", 512: "#81d4fa", 1024: "#01579b", 2048: "#4527a0" }


function Tile(){
  this.num = 0;
  this.color = '#FFFFFF';
  
  this.updateColor = function(){
    this.color = tileColors[this.num];
    return this;
  };
}



module.exports = Tile;
