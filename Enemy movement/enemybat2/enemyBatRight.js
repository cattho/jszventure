const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 100;
const enemyArray = [];

let gameFrame = 0;

class EnemyBatRight {
  constructor() {
    this.image = new Image();
    this.image.src = "../Assests/enemy2.png";
    this.positionX = Math.random() * canvas.width;
    this.positionY = Math.random() * canvas.height;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteHeight /2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }

  update() {
    this.positionX += Math.random()-1;
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
