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