var fadeAmount = 1
var mode="in"
var R
var G
var B
var window_size=400
var _brightness=200

// Changeable///
var rotaion_width=window_size*5/7  //if all prime number will be cooler
var rotaion_height=window_size*3/5 //can be any int

var cir_size=50 //size of circle and rectangular
var layer=5 //1~5
var rotation_speed=1 
var afterimage=40 //殘影
var _brightness_min=100 //0~255
///////////////////

function setup() {
  createCanvas(window_size, window_size);
  R=frameCount%(_brightness/2)+_brightness_min
  G=frameCount%(_brightness/3)+_brightness_min
  B=frameCount%(_brightness/5)+_brightness_min
  background(R,G,B,0.1);
  fade=0
}
function cir(a,b,size,start_x,start_y,count,speed,mode){
  if(count>0){
    push()
    let x
    let y
    R=frameCount%(_brightness/2)+_brightness_min
    G=frameCount%(_brightness/3)+_brightness_min
    B=frameCount%(_brightness/5)+_brightness_min
    fill(R,G,B)
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
    
    let cir_or_rect=Math.random()
    if(cir_or_rect>0.5){
      ellipse(x,y,size)
    }
    else{
      rect(x-size/2,y-size/2,size)
    }
    
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
  R=frameCount%(_brightness/2)+_brightness_min
  G=frameCount%(_brightness/3)+_brightness_min
  B=frameCount%(_brightness/5)+_brightness_min
  background(R,G,B,afterimage);
  cir(rotaion_width,rotaion_height,cir_size,window_size/2,window_size/2,layer,rotation_speed,mode)
  
  
}

// var websocket=new WebSocket('ws://localhost:9998');
// websocket.onmessage=function(event){
//     // document.forms[0].slider.value=event.data;
//     document.getElementById("demo").innerHTML = event.data;
//     console.log("!!!!!!!!!!!!!!!!!!!!!",event.data);
// };