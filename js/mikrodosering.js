(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - navOffset)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57 + 1
  });

  var navOffset;
  var setOffset = function() {
      if ($(window).width() < 960) {
        navOffset = 57;
      }
      else {
        navOffset = 57;
      }
  };

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  // Scroll Navbar
  var navbarScroll = function() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("mainNav").style.top = "0";
      } else if ($(window).width() < 960) {
        document.getElementById("mainNav").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    }
  };

  // Set offset
  setOffset();

  // Hide nav when scrolling down on small screens
  //navbarScroll();

  // Collapse now if page is not at top
  navbarCollapse();

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  $(window).resize(setOffset);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-warning', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  });
  sr.reveal('.sr-warning2', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  });
  sr.reveal('.sr-phone', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  });
  sr.reveal('.sr-list-positive', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 10);
  sr.reveal('.sr-list-negative', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 10);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });

})(jQuery); // End of use strict
