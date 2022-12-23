var fade
var fadeAmount = 1
var mode="in"
function setup() {
  createCanvas(400, 400);
  background(100,100,100,0.1);
  fade=0
}
function cir(a,b,size,start_x,start_y,count,speed,mode){
  if(count>0){
    push()
    let x
    let y
    if(mode==="in"){
      x=(a-frameCount%a)*cos(frameCount*speed)+start_x
      y=(b-frameCount%b)*sin(frameCount*speed)+start_y
      
    }
    else{
      x=(0+frameCount%a)*cos(frameCount*speed)+start_x
      y=(0+frameCount%b)*sin(frameCount*speed)+start_y
    }
    // background(100,100,100);
    strokeWeight(0.3)
    let color= frameCount%255+10
    fill(color,color,color)
    ellipse(x,y,size)
    
    if (fade<0) fadeAmount=1; 
 
    if (fade>255) fadeAmount=-10; 

    fade += fadeAmount; 
    pop()
    if(x===a){
      mode="in"
    }
    else{
      mode="out"
    }
    cir(a/2,b/2,size/2,start_x,start_y,count-1,-speed)
  }
  else{
    return
  }
}
function draw() {
  background(100,100,100,40);
  cir(200,200,50,200,200,8,1,mode)
  
  
}

// var websocket=new WebSocket('ws://localhost:9998');
// websocket.onmessage=function(event){
//     // document.forms[0].slider.value=event.data;
//     document.getElementById("demo").innerHTML = event.data;
//     console.log("!!!!!!!!!!!!!!!!!!!!!",event.data);
// };