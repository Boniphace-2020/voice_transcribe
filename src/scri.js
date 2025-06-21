$(".-js-reformedbaptist").unbind().click(function(event){
  event.preventDefault();
  if($("#section-distinctives").is(":visible")){
    $("#section-distinctives").slideUp();
  }
  if($("#section-statement").is(":visible")){
    $("#section-statement").slideUp();
  }
  $("#section-reformedbaptist").slideDown(function(){
      $('html, body').animate({
       scrollTop: $("#section-reformedbaptist").offset().top
    }, 1000);
  });

});

$(".-js-statement").unbind().click(function(event){
  event.preventDefault();
  if($("#section-distinctives").is(":visible")){
    $("#section-distinctives").slideUp();
  }
  if($("#section-reformedbaptist").is(":visible")){
    $("#section-reformedbaptist").slideUp();
  }
  $("#section-statement").slideDown(function(){
    $('html, body').animate({
       scrollTop: $("#section-statement").offset().top
    }, 1000);
  });

});

$(".-js-close-button").unbind().click(function(event){
  event.preventDefault();
    $(this).parents("section").slideUp();

    if($(this).hasClass("-js-close-to-resources-button")){
      $('html, body').animate({
         scrollTop: $("#-js-id-resources").offset().top
      }, 1000);
    }
    else{
      $('html, body').animate({
         scrollTop: $("#-js-id-distinctives").offset().top
      }, 1000);
    }
});


$(".-js-distinctives").unbind().click(function(event){
  event.preventDefault();
  if($("#section-reformedbaptist").is(":visible")){
    $("#section-reformedbaptist").slideUp();
  }
  if($("#section-statement").is(":visible")){
    $("#section-statement").slideUp();
  }
  $("#section-distinctives").slideDown(function(){
    $('html, body').animate({
       scrollTop: $("#section-distinctives").offset().top
    }, 1000);
  });


});

$(".-js-leadership").unbind().click(function(event){
  event.preventDefault();
  $('html, body').animate({
     scrollTop: $("#-js-id-leadership").offset().top
  }, 1000);

});

$(".-js-beliefs").unbind().click(function(event){
  event.preventDefault();
  $('html, body').animate({
     scrollTop: $("#section-beliefs").offset().top
  }, 1000);

});

$(".-js-events").unbind().click(function(event){
  event.preventDefault();
  $('html, body').animate({
     scrollTop: $("#-js-id-events").offset().top
  }, 1000);

});

$(".-js-surprise").unbind().click(function(event){
  event.preventDefault();
  $("#-js-id-surprise").show();
  $('html, body').animate({
     scrollTop: $("#-js-id-surprise").offset().top
  }, 1000);

});

$(".-js-services").unbind().click(function(event){
  event.preventDefault();
  $('html, body').animate({
     scrollTop: $("#-js-id-services").offset().top
  }, 1000);

});

$(".-js-resources").unbind().click(function(event){
  event.preventDefault();
  $('html, body').animate({
     scrollTop: $("#-js-id-resources").offset().top
  }, 1000);

});

$(".-js-contact").unbind().click(function(event){
  event.preventDefault();
  $('html, body').animate({
     scrollTop: $("#-js-id-contact").offset().top
  }, 1000);

});

$(".-js-sermons").unbind().click(function(event){
  event.stopPropagation();
  event.preventDefault();

  loc = $(this).attr("data-value");
  //console.log("loc: " + loc);
  if(loc && "" != loc){
    $("#-js-id-sermons iframe").attr("src", "http://www.sermonaudio.com/sermonbrowser.asp?sourceid=rbckc&style=2&iframe=true" + loc);
  }else{
    $("#-js-id-sermons iframe").attr("src", "http://www.sermonaudio.com/sermonbrowser.asp?sourceid=rbckc&style=2&iframe=true");
  }

  $('html, body').animate({
     scrollTop: $("#-js-id-sermons").offset().top
  }, 1000);

});

$(document).ready(function() {

  /* When distance from top = 250px fade button in/out */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 250) {
      $('.-js-scroll-top').fadeIn(300);
    } else {
      $('.-js-scroll-top').fadeOut(300);
    }
  });

  /* On click scroll to top of page t = 1000ms */
  $('.-js-scroll-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 750);
    return false;
  });
});



// menu
$(document).ready(function() {
    $('.mobile-nav').click(function() {
	   $('.mobile-nav__icon').toggleClass('active');
        $('.menu').slideToggle();
    });
});

// Aria Compliance

  function handleBtnClick(event) {
    event = event || window.event;
    var pressed = event.target.getAttribute("aria-pressed") == "true";
    //change the aria-pressed value as the button is toggled:
    event.target.setAttribute("aria-pressed", pressed ? "false" : "true");
    //... (perform the button's logic here)
  }

  function handleBtnKeyUp(event) {
    event = event || window.event;
    if (event.keyCode === 32) { // check for Space key
      handleBtnClick(event);
    }
  }


/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh
 */


$(document).ready(function(){
	// Cache the Window object
	$window = $(window);

   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object

      $(window).scroll(function() {

        var textindent = $("body").css("text-indent");
        //console.log("indent: " + textindent);

        if("2px" == textindent){
          // Scroll the background at var speed
          // the yPos is a negative value because we're scrolling it UP!
          var yPos = -($window.scrollTop() / $bgobj.data('speed'));

          // Put together our final background position
          var coords = '50% '+ yPos + 'px';

          // Move the background
          $bgobj.css({ backgroundPosition: coords });
        }

}); // window scroll Ends

 });

});
/*
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");
