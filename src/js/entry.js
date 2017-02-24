import $ from 'jquery';
import '../styles/main.scss';
//carousel items
var $testimonialCount = $(".text-carousel .carousel");

$(".text-carousel .carousel-indicators label").on("click", function(){
  var activeId = $(this).attr("for");
  //remove active class
  $(".carousel").removeClass("active");
  $(".carousel-bullet").removeClass("active");
  //add active class
  $(this).addClass("active");
  $(".carousel").each(function(){
    $(this).hide();
    if($(this).attr("id") == activeId)
    {
      $(this).fadeIn(800);
    }
  });
});

var $animation_elements = $('.testimonial');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

