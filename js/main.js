// OWL CAROUSEL JS


$('.owl-carousel').owlCarousel({
    loop:true,
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
   $(".phone").mask("+380-(99)-999-99-99");
   
});


// STICKY

$(document).ready(function(){
    $(".header").sticky({topSpacing:0});
  });

// DATEPICKER


var $startdate = $('.fromdate'),
  $enddate = $('.todate');

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


// FORM RESET
$(".modal-form").trigger('reset');

// DROPDOWN CITY
$(function(){
  
  $(".dropdown-menu li button").click(function(){
    
    $("#btn--city:first-child").text($(this).text());
     $("#btn--city:first-child").val($(this).text());
  });

});

// Items selector


$(document).ready(function() {

      /* initialize shuffle plugin */
      var $grid = $('#grid');

      $grid.shuffle({
        itemSelector: '.grid__item' // the selector for the items in the grid
      });

      /* reshuffle when user clicks a filter item */
      $('#filter button').click(function (e) {
        e.preventDefault();

        // set active class
        $('#filter button').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $grid.shuffle('shuffle', groupName );
      });

    });

// CUSTOM scroll

 (function($){
        $(window).load(function(){

            $(".chosen-drop").mCustomScrollbar({
                theme:"dark",
                autoDraggerLength:false,

            });


        });
})(jQuery);