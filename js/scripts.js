//#region Collapsable Button
// Define
const applyCollapseAction = (container, chevEl, btnEl) => {
  container.on('shown.bs.collapse', function() {
      chevEl.addClass('bi-chevron-up').removeClass('bi-chevron-down');
      btnEl.addClass('button-collapsable').removeClass('btn-outline-light');
    });
  container.on('hidden.bs.collapse', function() {
      chevEl.addClass('bi-chevron-down').removeClass('bi-chevron-up');
      btnEl.addClass('btn-outline-light').removeClass('button-collapsable');
  });
};

// Call
applyCollapseAction($('#collapsable-hv1'), $(".js-chevron-hv1"), $(".js-button-hv1"));
applyCollapseAction($('#collapsable-hv2'), $(".js-chevron-hv2"), $(".js-button-hv2"));
applyCollapseAction($('#collapsable-saba'), $(".js-chevron-saba"), $(".js-button-saba"));  
applyCollapseAction($('#collapsable-ret'), $(".js-chevron-ret"), $(".js-button-ret"));  
applyCollapseAction($('#collapsable-gow'), $(".js-chevron-gow"), $(".js-button-gow"));  
//#endregion

//#region Back to Top
$(document).ready(function() {

  $("a[href*=#]").click(function(event){     
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  }); 
     
});
//#endregion

//#region Text Position
$(function(){
  $(window).bind("resize",function(){
    console.log($(this).width())
      if($(this).width() <500){
      $('div').addClass('row-title-query')
      }
      else{
      $('div').removeClass('row-title-query')
    }
  })
})
//#endregion

// Initialise Carousel
const cardSlider = new Carousel(document.querySelector("#cardSlider"), {
  Dots: false,
  infinite: false,
});
