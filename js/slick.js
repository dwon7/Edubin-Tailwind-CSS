$(document).ready(function(){
    $('.image-slider').slick({
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
        autoplay: true,

    });
  });
      

$(document).ready(function(){
    $('.stick-list').slick({
       slidesToShow: 3,
       variableWidth: true,
       prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
       nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
       autoplay: true,
    });
});


$(document).ready(function(){
    $('.testimonial-list').slick({
        slidesToShow:2,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
        dots: true,
        autoplay: true,

    });
})
  

$(document).ready(function(){
    $('.logo-list').slick({
        slidesToShow:4,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
        autoplay: true,
    })
})


