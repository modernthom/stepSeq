let stepButtons = [];
let j = 0;
let sound1;
//var video;
//var imageBackground;

function preload(){
  sound1 = loadSound("SNARE2_HIPHOP2.wav");}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}  

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position (0, 0);
  canvas.style ('z-index', '-1');
  //imageBackground = createImage(320,240);
  //imageBackground.loadPixels();
  setInterval(getArrayContent, 200);
  for (let i = 0; i < 16; i++) {
    stepButtons[i] = new StepButton(1, [i]);} 
  //video = createCapture(VIDEO);
  //video.size(320, 240);
  //video.hide();
}

function draw() {
  background(180);
  //showBackgroundImage();
  for (let i = 0; i < stepButtons.length; i++) {
    stepButtons[i].dessine();
    stepButtons[i].animate();}}

// function takesnap(){
//   imageBackground = video.get();
//   imageBackground.filter('GRAY');
//   imageBackground.filter('BLUR', 3);
// }

// function showBackgroundImage(){
//   image(imageBackground, 0, 0, windowWidth, windowHeight);
// }

function getArrayContent() {
  stepButtons[j].longueur = (width / 16) * 3;
  stepButtons[j].longueurChangeante = -2;
    if (stepButtons[j].trigger == 1) {
    sound1.play();
    //takesnap();
  }
  j++;
  if (j >= 16) {
    j = 0;};}

function mousePressed() {
  for (let i = 0; i < 16; i++) {
    stepButtons[i].clicked();}}

class StepButton {
  constructor(numeroLigne, numeroColonne) {
    this.couleur = (255);
    this.x = ((width / 16) * 2) * numeroLigne;
    this.y = (height / 16) * numeroColonne;
    this.longueur = (width / 16) * 2;
    this.hauteur = height / 16;
    this.longueurChangeante = 0
    this.trigger = 0}
  dessine() {
    fill(this.couleur);
    noStroke();
    rect(this.x, this.y, this.longueur, this.hauteur, 10);}
  animate() {
    this.longueur = this.longueur + this.longueurChangeante;
    if (this.longueur <= (width / 16) * 2) {
          this.longueurChangeante = 0;
          this.longueur = (width / 16) * 2;}}
  clicked() {
    let dX = mouseX - this.x;
    let dY = mouseY - this.y;
    if (dX < this.longueur && dX > 0 && dY < this.hauteur && dY > 0) {
    if (this.trigger == 0){
          this.trigger =1;
          this.couleur = 63;}
    else {
          this.trigger = 0;
          this.couleur = 255;}
      this.longueur = (width / 16) * 3;
      this.longueurChangeante = -6;}
  }}