var box1,box2;

function setup() 
{
  createCanvas(400, 400);
  box1=new Box(200,200,20,20,2,3);
  box2=new Box(200,200,20,18,3,2);

}

function draw() 
{
  background(220);
  box1.show();
  box2.show();
  box1.speed();
  box2.speed();
  box1.speedUp();
  box2.speedUp();
}

