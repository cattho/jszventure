const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

// const enemy1 = {
//   x: 0,
//   y: 0,
//   width: 200,
//   height: 200,
// };

class Enemy {
  constructor() {
    (this.positionX = 10),
      (this.positionY = 50),
      (this.width = 100),
      (this.height = 100);
  }
}

const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemy1.positionX++;
  enemy1.positionY++;
  ctx.fillRect(enemy1.positionX, enemy1.positionY, enemy1.width, enemy1.height);
  requestAnimationFrame(animate);
};

animate();
