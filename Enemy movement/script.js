const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 50;
const enemyArray = []; //se crea este array vacio para que el ciclo pushee los enemigos hasta un maximo de numberOfEnemies

const enemyImage = new Image();
enemyImage.src = "./Assests/enemy1.png";
let gameFrame = 0;

//create enemy class
class Enemy {
  constructor() {
    this.positionX = Math.random() * canvas.width;
    this.positionY = Math.random() * canvas.height;
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293; //muestra el ancho de la unidad enemiga,
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5; //este ancho es el tamaño real del enemigo
    this.height = this.spriteHeight / 2.5;
    this.frame = 0; //muestra la posicion en la que esta la imagen actualmente
  }

  //update method to update enemy position
  update() {
    this.positionX += this.speed;
    this.positionY += this.speed;
    //animacion de unidades enemigas
    if (gameFrame % 2 === 0) {
      this.frame > 4 ? this.frame = 0 : this.frame++;
    }
  }

  //draw method render image enemy
  draw() {
    ctx.strokeRect(this.positionX, this.positionY, this.width, this.height);
    ctx.drawImage(
      enemyImage,
      this.frame * this.spriteWidth, //multiplico la posicion del frame por el tamaño del enemigo
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

console.log(enemyArray);

//create multiplies enemies
for (let i = 0; i < numberOfEnemies; i++) {
  enemyArray.push(new Enemy());
}

//animation function
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
