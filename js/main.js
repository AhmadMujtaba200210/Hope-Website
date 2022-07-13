/* global $,document,window,jQuery*/
jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius:15,
        perturbance:0.01
    });

   $(window).scroll(function(){
      var top=$(window).scrollTop();
       if(top>=60){
           $("nav").addClass('secondary');
       }else{
           if($("nav").hasClass('secondary')){
               $("nav").removeClass('secondary');
           }
       }
   });
});

