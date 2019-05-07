//Ésta clase con sus métodos es el BACKGROUND del Juego:

class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "Images/Party_Ball_Background_Final.jpg";
    this.w = w;
    this.h = h;

    this.x = 0;
    this.y = 0;
  }

  //Pintamos el BACKGROUND una primera vez del tamaño de toda la pantalla y a continuación seguidamente,
  // pegado al lado derecho del rectángulo dibujamos otros segundo BACKGROUNG igual, que es el de la
  // segunda sentencia de la función DRAW()

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
  }
}

//   move() {
//     this.x -= this.dx;

//     if (this.x < -this.w) this.x = 0;
//   }
