var zoom = 0;

function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    noFill();
    noLoop(); //Para o draw não ficar se repetindo.
    stroke(0, 0, 255);
    drawCircle(width/2, 0, 100+zoom); 
}

function drawCircle(x, y, d) { 
  rect(x, y, d, d);
  
  if(d > 20){ //Saida do loop infinito da fractal
      drawCircle(x, y, d/2);
      drawCircle(x+d, y, d/2);
      drawCircle(x-d, y, d/2);
      drawCircle(x, y+d, d/2);
      drawCircle(x, y-d, d/2);
  }
};

function mousePressed(){
    background(255);
    zoom+=100;
    drawCircle(width/2, 0, 100+zoom);
};
