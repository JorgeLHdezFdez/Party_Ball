//Ésta clase con sus métodos es la BALL del Juego:

class Ball {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "Images/Party_Ball_Ball_Final.png";
    this.w = w;
    this.h = h;
    this.x = window.innerWidth / 2 - 9;
    this.y = window.innerHeight / 2 - 9;
    this.speed = 10;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  moveLeft() {
    if (this.x > 0) this.x -= this.speed;
  }
  moveRight() {
    if (this.x < window.innerWidth - 16) this.x += this.speed;
  }
  moveUp() {
    if (this.y > 0) this.y -= this.speed;
  }
  moveDown() {
    if (this.y < window.innerHeight - 16) this.y += this.speed;
  }
}
