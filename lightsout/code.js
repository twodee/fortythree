var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var board= [
  [false,false,false,false,false],
  [false,false,false,false,false],
  [false,false,false,true,false],
  [false,false,false,false,false],
  [false,false,false,false,false]
]
function drawLines() {
  for (var i=100; i<= 400; i=i+100){
    context.beginPath();
    context.moveTo (000,i);
    context.lineTo (500,i);
    context.stroke();
    context.beginPath();
    context.moveTo (i,500);
    context.lineTo (i,000);
    context.stroke();
    console.log(i);
  }
}
function drawGStuff(){
  context.clearRect(0,0,500,500);
  //draw board
  for (var r=0; r<5; r=r+1){
    for (var c=0; c<5; c=c+1){
      if (board [r][c]) {
        context.fillStyle = 'yellow';
      } else {
        context.fillStyle = 'black';
      }
      context.fillRect(c*100,r*100,100,100)
    }
    }
  drawLines();
}
drawGStuff();
function onMouseClick(e){
  var c=Math.floor(e.clientX /100);
  var r=Math.floor(e.clientY /100);
  board [r][c] = ! board [r][c];
  drawGStuff();
}
canvas.onclick = onMouseClick;