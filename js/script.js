;(function(){
  if (!document.querySelectorAll) {
    return;
  }

  // Map all keys for navigating slides.
  var keys = {
      forward: [39, 75]
    , backward: [37, 74]
  };

  // Get the slides count.
  var slidesCount = document.querySelectorAll(".control-button").length;

  // Detect the current slide.
  var currentSlide = parseInt(location.hash.replace(/#item-/, "") || 1, 10);

  window.onkeyup = function(event) {
    var goingForward = keys.forward.indexOf(event.keyCode) >= 0;
    var goingBackward = keys.backward.indexOf(event.keyCode) >= 0;

    if (goingForward && currentSlide < slidesCount) {
      currentSlide += 1;
    }

    if (goingBackward && currentSlide > 1) {
      currentSlide -= 1;
    }

    location.hash = "#item-" + currentSlide;
  };
})();
