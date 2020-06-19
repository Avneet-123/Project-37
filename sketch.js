var drawing=[];
var currentpath=[];
var isDrawing=false;

function setup() {
  
  canvas = createCanvas(400, 400);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
  var button = createButton('Clear');
  
 button.mousePressed(clearSketch);
}

function draw() {
  background(0);
  if(isDrawing)
  {
    var point={
      
      x:mouseX, y:mouseY
    }
    currentPath.push(point);
  }
  
  
  stroke("blue");
  strokeWeight(4);
  noFill();
  for(var i=0;i<drawing.length;i++)
  {
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++)
    {
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }
  
}

function startPath()
{
  isDrawing=true;
  currentPath=[];
  drawing.push(currentPath);
}

function endPath()
{
  isDrawing=false;
}

function clearSketch()
{
  drawing = [];
}