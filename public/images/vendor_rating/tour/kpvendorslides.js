jQuery(document).ready(function(){

  jQuery('#kpvendorintroslides').before('<a id="cycle_prev"></a>');
  jQuery('#kpvendorintroslides').before('<a id="cycle_next"></a>');
  
  function onAfter(curr, next, opts) {
    var index = opts.currSlide;
    if(index == 0) {
      jQuery('#cycle_prev').hide();
      jQuery('#cycle_next').hide();
    }
    if(index == 1) {
      jQuery('#cycle_prev').hide();
      jQuery('#cycle_next').show();
    }
    if(index > 1 && index < opts.slideCount - 1) {
      jQuery('#cycle_prev').show();
      jQuery('#cycle_next').show();
    }
    if(index == opts.slideCount - 1) {
      jQuery('#cycle_prev').show();
      jQuery('#cycle_next').hide();
    }
  }
  
  jQuery('#kpvendorintroslides').cycle({
    fx:     'scrollHorz',
    prev:   '#cycle_prev', 
    next:   '#cycle_next',
    after:   onAfter,
    timeout: 0
  });
  
  if(jQuery('#kpvendorintroslides #slide_intro').length > 0) {
  
    jQuery('#kpvendorintroslides #slide_intro #cta_start').click(function(){
      jQuery('#kpvendorintroslides').cycle('next');
      return false;
    });
  }

  if(jQuery('#kpvendorintroslides #slide_intro_noratings').length > 0) {
  
    jQuery('#kpvendorintroslides #slide_intro_noratings #cta_intro').click(function(){
      jQuery('#kpvendorintroslides').cycle('next');
      return false;
    });
  }  
  
});