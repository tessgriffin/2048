const tileColors     = {   0: "#FFFFFF",   2: "#e57373",    4: "#b71c1c",    8: "#ff8a65",
                          16: "#ff5722",  32: "#fff176",   64: "#ffc107",  128: "#81c784", 
                         256: "#1b5e20", 512: "#81d4fa", 1024: "#01579b", 2048: "#4527a0" }

const tilePokemon    = {   0: "images/magikarp-2.jpg",   2: "images/magikarp-2.jpg",    4: "images/magikarp-2.jpg",    8: "images/magikarp-2.jpg",
                          16: "images/magikarp-2.jpg",  32: "images/magikarp-2.jpg",   64: "images/magikarp-2.jpg",  128: "images/magikarp-2.jpg", 
                         256: "images/magikarp-2.jpg", 512: "images/magikarp-2.jpg", 1024: "images/magikarp-2.jpg", 2048: "images/magikarp-2.jpg" }


function Tile(){
  this.num = 0;
  this.color = '#FFFFFF';
  this.pokemon = '#FFFFFF'
  
  this.updateColor = function(){
    this.color = tileColors[this.num];
    this.pokemon = tilePokemon[this.num];
    return this;
  };
}



module.exports = Tile;
