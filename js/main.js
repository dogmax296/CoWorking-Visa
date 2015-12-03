// OWL CAROUSEL JS


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout: 7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// SMOOTH CLICK BTN
$(document).ready(function(){
    // плавное перемещение страницы к нужному блоку
    $(".smoothclick").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
});

            

        