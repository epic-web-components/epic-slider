/*
  epic-slider js
  @requires jquery
  Author: Alex Goodwin, June 2016

  Would like to convert this to a polymer element.
*/

// arrow navigation
$('.epic-slider .slide a.leftArrow, .epic-slider .slide a.rightArrow').each(function() {
    $(this).click(function(e) {
        e.preventDefault();

        var num = $(this).parent().parent().index();

        if ($(this).hasClass('leftArrow')) {
            scrollTo(num - 1);
        } else {
            scrollTo(num + 1);
        }
    });
});

function scrollTo(num) {
    var slideWidth = $('.epic-slider .slide').width(),
        numOfSlides = $('.epic-slider .slide').length - 1;

    /* edge case logic */
    if (num < 0) {
        num = numOfSlides;
    } else if (num > numOfSlides) {
        num = 0;
    }
    $('.epic-slider').animate({
        scrollLeft: num * slideWidth
    }, 400);
}

function scrollNext() {
    /*
      Automatically scrolls to next slide. Set with interval within $(window).load()
    */
    scrollTo(currentSlide() + 1);
}

function currentSlide() {
    var slideWidth = $('.epic-slider .slide').width(),
        currentSlide = parseInt($('.epic-slider').scrollLeft() / slideWidth);
    return (currentSlide);
}

function numberOfSlides() {
  return numOfSlides = $('.epic-slider .slide').length - 1;
}

$(window).on('load', function() {
    var interval = 3000,
        bannerTimer = window.setInterval(scrollNext, interval);

    /*
      pause timer when mouse-overed
      TODO: mobile support?
    */
    $('.epic-slider').on('mouseover', function(e) {
        // pause timer
        clearInterval(bannerTimer);
    }).on('mouseout', function(e) {
        // restart timer
        bannerTimer = window.setInterval(scrollNext, interval);
    });

    /*
      hide nav arrows if there's only 1 slide
    */
    if(numberOfSlides() < 2) {
      $('.epic-slider .leftArrow, .epic-slider .rightArrow').css({
        opacity: '0'
      });
    }
});

// lock to current slide when resizing window
$(window).resize(function() {
    scrollTo(currentSlide());
});
