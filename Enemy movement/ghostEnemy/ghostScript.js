const canvas = document.getElementById("canvasGhost");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberEnemies = 8;
const enemyArray = [];

let gameFrame = 0;

class Ghost {
  constructor() {
    this.image = new Image();
    this.image.src = "../Assests/enemy3.png";
    this.positionX = Math.random() * canvas.width;
    this.positionY = Math.random() * canvas.height;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 1.5;
    this.height = this.spriteHeight / 1.5;
    this.frame = 0;
    this.ghostWavesSpeed = Math.floor(Math.random() * 3 + 1);
  }

  update() {
    this.positionY += Math.random() * -1;

    if (gameFrame % this.ghostWavesSpeed === 0) {
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

for (let i = 0; i < numberEnemies; i++) {
  enemyArray.push(new Ghost());
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
