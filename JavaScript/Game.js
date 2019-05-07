//OBJETO GAME, compuesto por Propiedades Literales y Propiedades en las cuales hemos Definido Funciones.
//Propiedades Literales:
const Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  //Propiedades en las cuales hemos Definido Funciones
  //init es nuestra función Principal
  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.start();
  },
  //start es la función de comienzo del juego
  start: function() {
    this.reset();
  },
  //Reseteamos todos los elementos del juego para empezar en un estado limpio
  reset: function() {
    this.background = new Background(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
    this.ball = new Ball(this.canvas.width, this.canvas.height, this.ctx);
  },
  drawAll: function() {
    this.background.draw();
    this.ball.draw();
  }
};
