const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 20;
const enemyArray = [];

let gameFrame = 0;

class EnemyBatRight {
  constructor() {
    this.image = new Image();
    this.image.src = "../Assests/enemy2.png";
    this.speed = Math.random() * 4 + 1;
    this.positionX = Math.random() * canvas.width;
    this.positionY = Math.random() * canvas.height;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteHeight / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = Math.random() * 2;
    this.angleSpeed = Math.random() * 0.2;
    this.enemyCurve = Math.random() * 10;
  }

  update() {
    this.positionX -= this.speed;
    this.positionY += this.enemyCurve * Math.sin(this.angle);
    this.angle += this.angleSpeed;
    this.positionX + this.width < 0 ? (this.positionX = canvas.width) : null;
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
  enemyArray.push(new EnemyBatRight());
}

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemyArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
};

animate();
