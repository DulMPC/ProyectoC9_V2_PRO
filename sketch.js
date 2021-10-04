var boton_red;
var boton_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  boton_red = createButton("RED");
  boton_red.position(100,50);
  boton_red.mousePressed(red_bg);
  
  
  boton_green = createButton("GREEN");
  boton_green.position(250,50);
  boton_green.mousePressed(green_bg);
  
}

function draw() {
  background(r,g,b);
}


function red_bg()
{
  r = 255;
  g = 0;
  b =0;
}

function green_bg()
{
  r = 0;
  g = 255;
  b =0;
}