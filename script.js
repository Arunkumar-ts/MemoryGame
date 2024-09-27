var overlayer=document.querySelector(".overlayer");
var gamelayer=document.querySelector(".gamelayer");
var game=document.querySelector(".game");
function start(event){
    event.preventDefault();
    overlayer.style.display="none";
    gamelayer.style.display="flex";
}
