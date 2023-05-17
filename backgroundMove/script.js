const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 5;

let backgroundPositionx = 0;
let backgroundPositionx2 = 2400;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "Assests/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "Assests/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "Assests/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "Assests/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "Assests/layer-5.png";

window.addEventListener("load", () => {
  const slider = document.getElementById("slider");
  slider.value = gameSpeed;
  const showGameSpeed = document.getElementById("showGameSpeed");
  showGameSpeed.innerHTML = gameSpeed;
  slider.addEventListener("change", (e) => {
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = gameSpeed;
  });

  class Layer {
    constructor(image, speedModifer) {
      this.backgroundPositionX = 0;
      this.backgroundPositionY = 0;
      this.width = 2400;
      this.height = 700;
      this.backgroundPositionX2 = this.width;
      this.image = image;
      this.speedModifer = speedModifer;
      this.speed = gameSpeed * this.speedModifer;
    }
    update() {
      this.speed = gameSpeed * this.speedModifer;
      if (this.backgroundPositionX <= -this.width) {
        this.backgroundPositionX =
          this.width + this.backgroundPositionX2 - this.speed;
      }
      if (this.backgroundPositionX2 <= -this.width) {
        this.backgroundPositionX2 =
          this.width + this.backgroundPositionX - this.speed;
      }
      this.backgroundPositionX = Math.floor(
        this.backgroundPositionX - this.speed
      );
      this.backgroundPositionX2 = Math.floor(
        this.backgroundPositionX2 - this.speed
      );
    }
    draw() {
      ctx.drawImage(
        this.image,
        this.backgroundPositionX,
        this.backgroundPositionY,
        this.width,
        this.height
      );
      ctx.drawImage(
        this.image,
        this.backgroundPositionX2,
        this.backgroundPositionY,
        this.width,
        this.height
      );
    }
  }

  const layer1 = new Layer(backgroundLayer1, 0.5);
  const layer2 = new Layer(backgroundLayer2, 0.5);
  const layer3 = new Layer(backgroundLayer3, 0.5);
  const layer4 = new Layer(backgroundLayer4, 0.8);
  const layer5 = new Layer(backgroundLayer5, 1);

  const gameObjects = [layer1, layer2, layer3, layer4, layer5];

  const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.map((layer) => {
      layer.update(), layer.draw();
    });
    requestAnimationFrame(animate);
  };

  animate();
});
