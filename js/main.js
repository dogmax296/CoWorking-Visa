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



// CHOSEN FOR SELECT

var config = {
  '.chosen-select'           : {},
  '.chosen-select-deselect'  : {allow_single_deselect:true},
  '.chosen-select-no-single' : {disable_search_threshold:10},
  '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
  '.chosen-select-width'     : {width:"95%"}
}

for (var selector in config) {
    $(selector).chosen(config[selector]);
}

// MASK INPUT

jQuery(function($){
   $("#phone").mask("+380-(99)-999-99-99");
   
});

// DATEPICKER

$(function() {
    $( "#from__date" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to__date" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

// STICKY

$(document).ready(function(){
    $(".header").sticky({topSpacing:0});
  });