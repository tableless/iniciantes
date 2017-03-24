$(document).ready(function(){
  prettyPrint();

  // Altera links externos para abrirem em uma nova aba
  var domain = document.location.protocol+'//'+document.location.host,
    links = $('.content a').each(function(index,element) {
    if(element.href.substr(0,domain.length) !== domain) {
      element.target = '_blank';
    }
  });
});
