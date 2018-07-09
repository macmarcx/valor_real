/*---Scroll do navbar---*/
/*Como Funciona*/
$("#preco").click(function() {
  $('html, body').animate({
    scrollTop: $("#dpreco").offset().top
  }, 2000);
});
/*Preço*/
$("#cfunciona").click(function() {
  $('html, body').animate({
    scrollTop: $("#dcfunciona").offset().top
  }, 2000);
});

/*---Scroll da classe anime---*/
/*Debounce do Lodash*/
debounce = function(func, wait, immediate){
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

(function() {
  var $target = $('.anime'),
  animationClass = 'anime-start',
  offset = $(window).height() * 3/4;

  function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function() {
      var itemTop = $(this).offset().top;
      if(documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    })
  }
animeScroll();

$(document).scroll(debounce(function(){
  animeScroll();
}, 200));
}());
