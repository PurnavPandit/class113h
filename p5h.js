function preload(){

}
function setup(){
   canvas = createCanvas(640,480);
   canvas.position(110,250);
   video = createCapture(VIDEO);
   video.hide();
}
function draw(){
    rectMode(CENTER);
    fill(100)
    rect(320, 240, 640, 480);
    ellipse(56, 46, 55, 55);
    ellipseMode(CORNER);
    fill(255);
    ellipse(500, 46, 55, 55);
    ellipseMode(CORNER);
    fill(255);
    ellipse(500, 400, 55, 55);
    ellipseMode(CORNER);
    fill(255);
    ellipse(56, 400, 55, 55);
    ellipseMode(CORNER);
    fill(255);
    image(video,100,100,430,300);
}
function take_snapshot()
{
    save ('student_name.png');
}
