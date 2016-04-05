const tileColors     = {   0: "#FFFFFF",   2: "#e57373",    4: "#b71c1c",    8: "#ff8a65",
                          16: "#ff5722",  32: "#fff176",   64: "#ffc107",  128: "#81c784", 
                         256: "#1b5e20", 512: "#81d4fa", 1024: "#01579b", 2048: "#4527a0" }

const tilePokemon    = {   0: "#FFF",   2: "images/magikarp-2.jpg",    4: "images/caterpie-4.jpg",    8: "images/pikachu-8.jpg",
                          16: "images/charmander-16.jpg",  32: "images/bulbasuar-32.jpg",   64: "images/squirtle-64.jpg",  128: "images/blastoise-128.jpg", 
                         256: "images/venusaur-256.jpg", 512: "images/ditto-512.jpg", 1024: "images/eevee-1048.jpg", 2048: "images/mew-2048.jpg" }

const tileFace    = {      0: "images/turing-tile.png",        2: "images/mike-2.gif",         4: "images/raissa-4.gif",        8: "images/horace-8.gif",
                          16: "images/josh-16.gif",           32: "images/cheek-32.gif",      64: "images/jorge-64.gif",      128: "images/daisha-128.gif", 
                         256: "images/marissa-256.gif",      512: "images/rachel-512.gif",  1024: "images/steve-1024.gif",   2048: "images/jeff-2048.gif" }

function Tile(){
  this.num = 0;
  this.color = '#FFFFFF';
  this.pokemon = '#FFFFFF';
  this.face  = '#FFFFFF';
  
  this.updateColor = function(){
    this.color = tileColors[this.num];
    this.pokemon = tilePokemon[this.num];
    this.face = tileFace[this.num];
    return this;
  };
}



module.exports = Tile;
