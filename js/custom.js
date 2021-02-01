$(function(){
    
      //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 140
                }, 2500);
                return false;
            }
        }
    });
    
    //counter up
    
    $('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
  //feedback
$('.feedback-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
});
    
    //team part
    
   $('.team-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
        {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
        {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },

  ]

}); 
    //preloader
    
    $(window).on('load',function(){
        $('.preloader').delay(500).fadeOut(500);
    });
    
    //work part
    
    $('.venobox').venobox(); 
    
    //back-top
    $('.back-top').click(function(){
        $('html,body').animate({scrollTop:0},1500);
    })
    
    //navbar scroll
    
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();
        if (scrolling >200){
            $('.navbar').addClass('bg');
        }
        else{
           $('.navbar').removeClass('bg');  
        }
        if( scrolling>200){
            $('.back-top').fadeIn(500);
        }
        else{
             $('.back-top').fadeOut(500);
        }
      
    });
    
    
    
    
    
    
    
    
    
})