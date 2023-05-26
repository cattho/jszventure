const canvas = document.getElementById("ballEnemy");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 35;
const enemyArray = [];

let gameFrame = 0;

class BallEnemy {
  constructor() {
    this.image = new Image();
    this.image.src = "../Assests/enemy4.png";
    this.positionX = Math.random() * canvas.width;
    this.positionY = Math.random() * canvas.height;
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 213;
    this.spriteHeight = 212;
    this.width = this.spriteWidth / 1.5;
    this.height = this.spriteHeight / 1.5;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }

  update() {
    // this.positionX += Math.random() * 5 - 2.5;
    this.positionY += Math.random() * 5 - 2.5;
    this.positionY + this.width < 0 ? (this.positionY = canvas.width) : null;
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemyArray.push(new BallEnemy());
}

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemyArray.forEach((enemyBall) => {
    enemyBall.update();
    enemyBall.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
};

animate()
