var bodyElement = document.getElementsByTagName("body")[0];
function responsiveMenuShowBattle(){
    bodyElement.setAttribute("responsiveView", "battle");
}


document.getElementById("food").addEventListener("click",function() { setResponsiveGather('food')});
document.getElementById("wood").addEventListener("click",function() { setResponsiveGather('wood')});
document.getElementById("metal").addEventListener("click",function() { setResponsiveGather('metal')});
document.getElementById("science").addEventListener("click",function() { setResponsiveGather('science')});
document.getElementById("trimps").addEventListener("click",function() { setResponsiveGather('trimps')});

setResponsiveGather = function(resource){
   setGather(resource);
}


const originalSetGather = setGather;
setGather = function(resource){
    bodyElement.setAttribute("gather", resource);
    originalSetGather(resource);
}