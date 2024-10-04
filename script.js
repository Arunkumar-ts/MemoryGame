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
var fcolor,scolor,fbox,sbox;
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
            sbox=document.querySelector("box1");
            scolor=innerbox1.style.backgroundColor;
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            if(fcolor==scolor){
                fbox.style.display="none";
                sbox.style.display="none";
            }
            fcolor=innerbox1.style.backgroundColor;
            finner=document.querySelector(".innerbox1");
            fbox=document.querySelector("box1");
   
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox1");
        fbox=document.querySelector("box1");
        fcolor=innerbox1.style.backgroundColor;
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
            scolor=innerbox2.style.backgroundColor;
            sinner=document.querySelector(".innerbox2");
            sbox=document.querySelector("box2");
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            if(fcolor==scolor){
                fbox.style.display="none";
                sbox.style.display="none";
            }
            fcolor=innerbox2.style.backgroundColor;
            finner=document.querySelector(".innerbox2");
            fbox=document.querySelector("box2");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox2");
        fbox=document.querySelector("box2");
        fcolor=innerbox2.style.backgroundColor;
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
            sbox=document.querySelector("box3");
            scolor=innerbox3.style.backgroundColor;
        }
        else if(first==2){
            finner.style.display="none";
            sinner.style.display="none";
            first=1;
            if(fcolor==scolor){
                fbox.style.display="none";
                sbox.style.display="none";
            }
            else{}
            fcolor=innerbox3.style.backgroundColor;
            fbox=document.querySelector("box3");
            finner=document.querySelector(".innerbox3");
        }
    }
    else{
        first=1;
        finner=document.querySelector(".innerbox3");
        fbox=document.querySelector("box3");
        fcolor=innerbox3.style.backgroundColor;
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
var randomar=[];
randomar.push(100);
while(randomar.length <=12){
    var r=Math.ceil(Math.random()*12);
    if(randomar.indexOf(r) === -1){
        randomar.push(r);
    }
}

//Fro change image
var color1="red";
var color2="blue";
var color3="yellow";
var color4="green";
var color5="black";
var color6="white";

var innerbox1of1=`.innerbox`+randomar.indexOf(1);
var innerbox1of2=`.innerbox`+randomar.indexOf(2);
document.querySelector(innerbox1of1).style.backgroundColor=color1;
document.querySelector(innerbox1of2).style.backgroundColor=color1;

var innerbox1of3=`.innerbox`+randomar.indexOf(3);
var innerbox1of4=`.innerbox`+randomar.indexOf(4);
document.querySelector(innerbox1of3).style.backgroundColor=color2;
document.querySelector(innerbox1of4).style.backgroundColor=color2;

var innerbox1of5=`.innerbox`+randomar.indexOf(5);
var innerbox1of6=`.innerbox`+randomar.indexOf(6);
document.querySelector(innerbox1of5).style.backgroundColor=color3;
document.querySelector(innerbox1of6).style.backgroundColor=color3;

var innerbox1of7=`.innerbox`+randomar.indexOf(7);
var innerbox1of8=`.innerbox`+randomar.indexOf(8);
document.querySelector(innerbox1of7).style.backgroundColor=color4;
document.querySelector(innerbox1of8).style.backgroundColor=color4;

var innerbox1of9=`.innerbox`+randomar.indexOf(9);
var innerbox1of10=`.innerbox`+randomar.indexOf(10);
document.querySelector(innerbox1of9).style.backgroundColor=color5;
document.querySelector(innerbox1of10).style.backgroundColor=color5;

var innerbox1of11=`.innerbox`+randomar.indexOf(11);
var innerbox1of12=`.innerbox`+randomar.indexOf(12);
document.querySelector(innerbox1of11).style.backgroundColor=color6;
document.querySelector(innerbox1of12).style.backgroundColor=color6;

