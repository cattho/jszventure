const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const enemy1 = new Image();
enemy1.src = "./Assests/enemy1.png";
const enemy2 = new Image();
enemy2.src = "./Assests/enemy2.png";
const enemy3 = new Image();
enemy3.src = "./Assests/enemy3.png";
const enemy4 = new Image();
enemy4.src = "./Assests/enemy4.png";

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(enemy1, 0, 0, 0, 0);
};

animate();
