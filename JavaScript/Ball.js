//Ésta clase con sus métodos es la BALL del Juego:

class Ball {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "Images/Party_Ball_Ball_Final.png";
    this.h = 16;
    this.w = 16;

    this.x = 624;
    this.y = 246;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}
