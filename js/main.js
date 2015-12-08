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

jQuery(document).ready(function($) {
 
    $(".smoothclick").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
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


// STICKY

$(document).ready(function(){
    $(".header").sticky({topSpacing:0});
  });

// DATEPICKER


var $startdate = $('#fromdate'),
  $enddate = $('#todate');

  $startdate.datepicker({
    language: 'ru',
    onSelect: function (fd, date) {
      $enddate.data('datepicker')
        .update('minDate', date)
    },
    position: 'top right'
  })

  $enddate.datepicker({
    language: 'ru',
    onSelect: function (fd, date) {
      $startdate.data('datepicker')
        .update('maxDate', date)
    },
    position: 'top right'
  })


// CHECKBOXES RESET
$("#participants__checkboxes-form").trigger('reset');

