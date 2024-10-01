var overlayer=document.querySelector(".overlayer");
var gamelayer=document.querySelector(".gamelayer");
var game=document.querySelector(".game");
function start(event){
    event.preventDefault();
    overlayer.style.display="none";
    gamelayer.style.display="flex";
}
var first,finner,sinner;
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
        box1.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox1");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox1");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox1");
    }

}
function box2f(){
    box2.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox2.style.display="block";
    },300);
    setTimeout(()=>{
        box2.style.animation="";
    },1000);
     if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox2");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox2");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox2");
    }
}
function box3f(){
    box3.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox3.style.display="block";
    },300);
    setTimeout(()=>{
        box3.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox3");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox3");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox3");
    }
}
function box4f(){
    box4.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox4.style.display="block";
    },300);
    // setTimeout(()=>{
    //     innerbox4.style.display="none";
    // },650);
    setTimeout(()=>{
        box4.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox4");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox4");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox4");
    }
}
function box5f(){
    box5.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox5.style.display="block";
    },300);
    setTimeout(()=>{
        box5.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox5");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox5");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox5");
    }
}

function box6f(){
    box6.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox6.style.display="block";
    },300);
    setTimeout(()=>{
        box6.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox6");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox6");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox6");
    }
}

function box7f(){
    box7.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox7.style.display="block";
    },300);
    setTimeout(()=>{
        box7.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox7");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox7");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox7");
    }
}
function box8f(){
    box8.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox8.style.display="block";
    },300);
    setTimeout(()=>{
        box8.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox8");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox8");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox8");
    }
}
function box9f(){
    box9.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox9.style.display="block";
    },300);
    setTimeout(()=>{
        box9.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox9");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox9");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox9");
    }
}
function box10f(){
    box10.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox10.style.display="block";
    },300);
    setTimeout(()=>{
        box10.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox10");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox10");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox10");
    }
}
function box11f(){
    box11.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox11.style.display="block";
    },300);
    setTimeout(()=>{
        box11.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox11");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox11");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox11");
    }
}
function box12f(){
    box12.style.animation="rot 0.8s linear 1";
    setTimeout(()=>{
        innerbox12.style.display="block";
    },300);
    setTimeout(()=>{
        box12.style.animation="";
    },1000);
    if(first){
        if(first==1){
            first=2;
            sinner=document.querySelector(".innerbox12");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            finner=document.querySelector(".innerbox12");
        }
    } 
    else{
        first=1;
        finner=document.querySelector(".innerbox12");
    }
}

//For random values
var r1,r2,r3,r4,r5,r6;
var pair1,pair2,pair3,pair4,pair5,pair6;

r1=Math.ceil(Math.random()*6);
pair1=r1;

r2=Math.ceil(Math.random()*6);
if(r1==r2){
    do{
        r2=Math.ceil(Math.random()*6);
    }
    while(r1==r2);
    pair2=r2;
}
else{
    pair2=r2;
}

r3=Math.ceil(Math.random()*6);
if(r3==r1 || r3==r2){
    do{
        r3=Math.ceil(Math.random()*6);
    }
    while(r3==r1 || r3==r2);
    pair3=r3;
}
else{
    pair3=r3;
}

r4=Math.ceil(Math.random()*6);
if(r4==r1 || r4==r2 || r4==r3){
    do{
        r4=Math.ceil(Math.random()*6);
    }
    while(r4==r1 || r4==r2 || r4==r3);
    pair4=r4;
}
else{
    pair4=r4;
}

r5=Math.ceil(Math.random()*6);
if(r5==r1 || r5==r2 || r5==r3 || r5==r4){
    do{
        r5=Math.ceil(Math.random()*6);
    }
    while(r5==r1 || r5==r2 || r5==r3 || r5==r4);
    pair5=r5;
}
else{
    pair5=r5;
}

r6=Math.ceil(Math.random()*6);
if(r6==r1 || r6==r2 || r6==r3 || r6==r4 || r6==r5){
    do{
        r6=Math.ceil(Math.random()*6);
    }
    while(r6==r1 || r6==r2 || r6==r3 || r6==r4 || r6==r5);
    pair6=r6;
}
else{
    pair6=r6;
}

//Fro change image

