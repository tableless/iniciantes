;(function(){
  // Meh. Probably using an old IE version.
  if (!document.querySelectorAll || !window.addEventListener) {
    return;
  }

  // Map all keys for navigating slides.
  var keys = {
      forward: [39, 75, 32]
    , backward: [37, 74]
  };

  // Hold touch events.
  var touches = {move: []};

  // Get the slides count.
  var slidesCount = document.querySelectorAll(".control-button").length;

  // Detect the current slide.
  var currentSlide = parseInt(location.hash.replace(/#item-/, "") || 1, 10);

  // Change the slide url.
  var changeSlide = function() {
    location.hash = "#item-" + currentSlide;
  };

  // Go forward when possible.
  var forward = function() {
    if (currentSlide < slidesCount) {
      currentSlide += 1;
    }

    changeSlide();
  };

  // Go backward when possible.
  var backward = function() {
    if (currentSlide > 1) {
      currentSlide -= 1;
    }

    changeSlide();
  };

  // Listen to the keyboard events.
  window.addEventListener("keyup",  function(event) {
    keys.forward.indexOf(event.keyCode) >= 0 && forward();
    keys.backward.indexOf(event.keyCode) >= 0 && backward();
  }, false);

  // Listen to the touch events.
  window.addEventListener("touchmove", function(event){
    touches.move.push(event);
  }, false);

  window.addEventListener("touchstart", function(event) {
    touches.start = event;
  }, false);

  window.addEventListener("touchend", function(event){
    touches.end = event;

    var elapsedTime = touches.end.timeStamp - touches.start.timeStamp;
    var startX = touches.start.pageX;
    var endX = touches.move.slice(-1)[0].pageX;

    // If took too much time, don't consider as a swipe event.
    if (elapsedTime > 200) {
      return;
    }

    // The minimum swipe size.
    if (Math.abs(startX - endX) < 50) {
      return;
    }

    if (startX > endX) {
      forward();
    } else {
      backward();
    }
  }, false);
})();
