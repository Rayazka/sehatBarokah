$(document).ready(function(){
   $("#testimonial-slider").owlCarousel({
      loop: true,
      center: true,
      pagination:true,
      nav: true,
      navigation:true,
      slideSpeed:1000,
      autoPlay:true,
      items:3,
      responsive : {
         // breakpoint from 0 up
         0 : {
            items:1,
            nav: false,
         },
         // breakpoint from 480 up
         480 : {
            items:1,
            nav: false,
         },
         // breakpoint from 768 up
         768 : {
            items:2,
         },
         997:{
            items:3,
         }
      }
   });

   const toTopBtn = document.getElementById('backToTopBtn');
$(window).scroll(function(){
   if($(window).scrollTop() > 300){
      toTopBtn.classList.add('show')
   }else{
      toTopBtn.classList.remove('show')
   }
});
toTopBtn.addEventListener('click', function(e){
   e.preventDefault()
   $('html, body').animate({scrollTop:0}, '300')
})
});

AOS.init({
   duration:1000,
   once:true
});

