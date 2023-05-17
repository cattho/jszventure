const canvas = document.getElementById("canvas-dog");
const ctx = canvas.getContext("2d");
const dropdown = document.getElementById("animations");
let playerState = "idle";
dropdown.addEventListener("change", (e) => {
  playerState = e.target.value;
});

//I define the height and width dimensions of the canvas
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

//llamo la imagen del jugador
const playerImg = new Image();
playerImg.src = "./Assets/shadow_dog.png";
const spriteWidth = 575; //en este caso se da este numero porque la imagen tiene un ancho de 6876px y se divide en el numero de columnas que es 12
const spriteHeigh = 523; //el mismo caso de arriba pero con la altura
let gameframe = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeigh;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

//creare un bucle de animacion para la imagen

const animate = () => {
  //limpio el rectangulo, esta funcion recibe 4 argumentos, eje x,y width,heigh
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //estoy creando un rectangulo para probar
  // ctx.fillRect(50, 50, 100, 100);
  let position =
    Math.floor(gameframe / staggerFrames) %
    spriteAnimations[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  //llamo la imagen con drawimage, primer argumento es la imagen, segundo es el eje x y el tercero eje. el cuarto puede ser el width y el quinto el alto
  ctx.drawImage(
    playerImg,
    frameX,
    frameY,
    spriteWidth,
    spriteHeigh,
    0,
    0,
    spriteWidth,
    spriteHeigh
  );
  gameframe++;
  requestAnimationFrame(animate);
};

animate();
