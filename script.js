var overlayer=document.querySelector(".overlayer");
var gamelayer=document.querySelector(".gamelayer");
var game=document.querySelector(".game");
function start(event){
    event.preventDefault();
    overlayer.style.display="none";
    gamelayer.style.display="flex";
}
var first;
var box1=document.querySelector(".box1");
var box2=document.querySelector(".box2");
var box3=document.querySelector(".box3");
var box4=document.querySelector(".box4");
var box5=document.querySelector(".box5");
var box6=document.querySelector(".box6");
var box7=document.querySelector(".box7");
var box8=document.querySelector(".box8");
var box9=document.querySelector(".box9");
var box10=document.querySelector(".box10");
var box11=document.querySelector(".box11");
var box12=document.querySelector(".box12");

var innerbox1=document.querySelector(".innerbox1");
var innerbox2=document.querySelector(".innerbox2");
var innerbox3=document.querySelector(".innerbox3");
var innerbox4=document.querySelector(".innerbox4");
var innerbox5=document.querySelector(".innerbox5");
var innerbox6=document.querySelector(".innerbox6");
var innerbox7=document.querySelector(".innerbox7");
var innerbox8=document.querySelector(".innerbox8");
var innerbox9=document.querySelector(".innerbox9");
var innerbox10=document.querySelector(".innerbox10");
var innerbox11=document.querySelector(".innerbox11");
var innerbox12=document.querySelector(".innerbox12");
function box1f(){
    box1.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox1.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox1.style.display="none";
    },650);
    setTimeout(()=>{
        box1.style.animation="";
    },1000);
}
function box2f(){
    box2.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox2.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox2.style.display="none";
    },650);
    setTimeout(()=>{
        box2.style.animation="";
    },1000);
}
function box3f(){
    box3.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox3.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox3.style.display="none";
    },650);
    setTimeout(()=>{
        box3.style.animation="";
    },1000);
}
function box4f(){
    box4.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox4.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox4.style.display="none";
    },650);
    setTimeout(()=>{
        box4.style.animation="";
    },1000);
}
function box5f(){
    box5.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox5.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox5.style.display="none";
    },650);
    setTimeout(()=>{
        box5.style.animation="";
    },1000);
}

function box6f(){
    box6.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox6.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox6.style.display="none";
    },650);
    setTimeout(()=>{
        box6.style.animation="";
    },1000);
}

function box7f(){
    box7.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox7.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox7.style.display="none";
    },650);
    setTimeout(()=>{
        box7.style.animation="";
    },1000);
}
function box8f(){
    box8.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox8.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox8.style.display="none";
    },650);
    setTimeout(()=>{
        box8.style.animation="";
    },1000);
}
function box9f(){
    box9.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox9.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox9.style.display="none";
    },650);
    setTimeout(()=>{
        box9.style.animation="";
    },1000);
}
function box10f(){
    box10.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox10.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox10.style.display="none";
    },650);
    setTimeout(()=>{
        box10.style.animation="";
    },1000);
}
function box11f(){
    box11.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox11.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox11.style.display="none";
    },650);
    setTimeout(()=>{
        box11.style.animation="";
    },1000);
}
function box12f(){
    box12.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox12.style.display="block";
    },300);
    setTimeout(()=>{
        innerbox12.style.display="none";
    },650);
    setTimeout(()=>{
        box12.style.animation="";
    },1000);
}

var random=Math.ceil(Math.random()*6);
var pair1=1,pair2=2,pair3=3,pair4=4,pair5=5,pair6=6;