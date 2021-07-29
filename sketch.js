const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;
var background, backgroundImg;
var snowImg;
var snowfall;  
var fall = [];


function preload() {
  backgroundImg = loadImage("snow1.jpg");
  snowImg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  
  background(backgroundImg);
  Engine.update(engine);
  
  if(frameCount%5 === 0){
    fall.push(snowfall = new Snowfall());
  }
 
  console.log("snowfall");
  drawSprites();
}