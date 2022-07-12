jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius:15,
        perturbance:0.01
    });

   
});

function changeBg(){
    var scrollvalue=window.scrollY;
    var navi=document.getElementById('navi');
    if(scrollvalue<150){
        navi.classList.remove('bgColor');
    }else{
        navi.classList.add('bgColor');
    }
}

window.addEventListener('scroll',changeBg);