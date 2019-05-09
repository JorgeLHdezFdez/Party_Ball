//OBJETO GAME, compuesto por Propiedades Literales y Propiedades en las cuales hemos Definido Funciones.
//Propiedades Literales:
const Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  keys: {
    left: 37,
    right: 39,
    up: 38,
    down: 40
  },
  //Propiedades en las cuales hemos Definido Funciones
  //init es nuestra función Principal
  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.setHandlers();
    this.start();
    this.setEventListeners();
  },
  //"setDimensions es la propiedad que define las DIMENSIONS del CANVAS"
  setDimensions: function() {
    this.canvas.setAttribute("width", window.innerWidth);
    this.canvas.setAttribute("height", window.innerHeight);
  },
  //"setHandlers" es la propiedad que permite que cúando el tamaño de la ventana se mueva
  //el CANVAS se ajustará del tal forma que siga ocupando todo el espacio de la ventana.
  setHandlers: function() {
    window.onresize = () => this.setDimensions();

    //document.keydown = function(e) {
    // console.log(e.keyCode);
    //};
  },
  //"start" es la propiedad cuya función da comienzo del juego
  start: function() {
    this.reset();
    this.interval = setInterval(() => {
      this.clean();
      this.drawAll();
      //collision functions instead of inside left and right
      this.ball.insideLeftBasket();
      this.ball.insideRightBasket();
    }, 1000 / 60);
  },
  //"reset" resetea todos los elementos del juego para empezar en un estado limpio
  reset: function() {
    this.background = new Background(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
    this.ball = new Ball(16, 16, this.ctx);
  },
  //"clean" limpia todo el CANVAS, es decir, toda la pantalla.
  clean: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  drawAll: function() {
    this.background.draw();
    this.ball.draw();
  },
  setEventListeners: function() {
    document.onkeydown = e => {
      //console.log(e.keyCode, this.keys.left);
      if (e.keyCode === this.keys.left) this.ball.moveLeft();
      if (e.keyCode === this.keys.right) this.ball.moveRight();
      if (e.keyCode === this.keys.up) this.ball.moveUp();
      if (e.keyCode === this.keys.down) this.ball.moveDown();
    };
  }
};
