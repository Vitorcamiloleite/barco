const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var canvas,tower, angle, ground, cannom,cannomball,boat
var balls = []
//criar variável para objeto 

function preload() {
  //adicionar imagem de fundo
  backgroundImg = loadImage("./assets/background.gif");
  //adicionar imagem da torre
  towerimage = loadImage("./assets/tower.png")
}


function setup() {
  //criar canvas para o fundo cobrir a tela inteira
 canvas = createCanvas(1200,600)
  engine = Engine.create();
  world = engine.world;

  angle = -PI / 4
 
  //criar objeto torre, lembra da palavra chave para criar um objeto?
tower = new Tower(150, 350, 160, 310)
cannom = new Cannom(180, 110, 110, 50, angle)
boat = new Boat(width,height - 100, 200, 200, -100)

}


function draw() 
{
  background(189);
  //adicionando imagem para ser exibida
  image(backgroundImg, 0, 0, width, height);
Engine.update(engine);
  

//exibir a torre (Desafio 4)
  Matter.Body.setVelocity(boat.body,{
    x: -0.9,
    y: 0
  });



  tower.display()
 cannom.display()
 boat.display()
 for(var i = 0;i < balls.length;i++){
  showCannomBalls(balls [i],i)
  
  }
    
}

function keyPressed(){
if (keyCode === DOWN_ARROW){
  //cannomball.shoot();
  cannomball = new CannonBall(cannom.x, cannom.y)
  balls.push(cannomball) 
  console.log(balls)

}
}
function showCannomBalls(ball,index){
  ball.display()
  if (ball.body.position.x >= width || ball.body.position.y >= height -50 ){
    Matter.World.remove(world, ball.body)
    balls.splice(index, 1)
  }

}

function keyReleased(){
if (keyCode === DOWN_ARROW){
balls[balls.length - 1].shoot();
}
}














