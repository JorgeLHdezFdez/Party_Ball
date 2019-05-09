//Ésta clase con sus métodos es la BALL del Juego:

class Ball {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "Images/Party_Ball_Ball_Final.png";
    this.w = w;
    this.h = h;
    //this.x = 890;
    //this.y = 290;
    this.x = window.innerWidth / 2 - 9;
    this.y = window.innerHeight / 2 - 9;
    this.speed = 10;
    this.counter = 0;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    //console.log(this.x, this.y);
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
  insideLeftBasket() {
    if (this.x >= 45 && this.x <= 85 && (this.y >= 262 && this.y <= 302)) {
      this.counter += 2;
      this.x = window.innerWidth / 2 - 9;
      this.y = window.innerHeight / 2 - 9;
      console.log("INSIDE THE FIRST BASKET");
      console.log(this.counter);
    }
  }
  insideRightBasket() {
    if (this.x >= 822 && this.x <= 862 && (this.y >= 262 && this.y <= 302)) {
      this.counter += 2;
      this.x = window.innerWidth / 2 - 9;
      this.y = window.innerHeight / 2 - 9;
      console.log("INSIDE THE SECOND BASKET");
      console.log(this.counter);
    }
  }
}
