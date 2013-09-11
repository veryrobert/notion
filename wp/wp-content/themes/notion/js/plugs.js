
$.localScroll({
  duration: 1200,
  easing: 'jswing',
    offset:-50
  });

  // scroll top stuff
  $(window).on("scroll", function(){
    var top = $(window).scrollTop();
    if (top < 100) {
      $('#down').removeClass('active').removeAttr('href').attr('href', '#target');
      $('nav').css('opacity', 1);
      $('.top').css('opacity', 0);
    } else {
      $('#down').fadeIn().addClass('active').removeAttr('href').attr('href', '#heyo');
      $('nav').css('opacity', 0);
      $('.top').css('opacity', 1);
    }
  });


if($('#case-study').length > 0){
  $('#down').scrollTo($('#case-study'));
}


$(window).resize(function(){

  var width = $(window).width();

  if (width < 767) {

    $('nav').removeClass('active');

  } else {

    $('nav').addClass('active');

  }

});



$(document).ready(function(){
 $('.bxslider').bxSlider({
  mode: 'fade',
  autoStart:'true',
  easing:'linear',
  preloadImages: 'all'
});
});

$(".map").hide();

$(".trigger").click(function () {
  $(".map").slideToggle("slow");
});


$(".menu-trigger").click(function () {
  $("nav").slideToggle("slow");
});





$('.hovertext a').each(function(){
  $(this).hover(function(){
    var projectTitle = $(this).find('img').attr('title');
    $(this).append('<h4 class="caption">' + projectTitle + '</h4>');
    $('h4.caption').css('opacity', 0);
    $(this).children('h4').animate({opacity: 1}, 100);
    $(this).find('img').addClass('hovered');
  }, function(){
    $(this).css('opacity', 1);
    $(this).find('h4').remove();
    $(this).find('img').removeClass();
  });
});




