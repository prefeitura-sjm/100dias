
$(function() {
    var oTop = $('.counter-wrapper').offset().top - window.innerHeight;
    $(window).scroll(function(){

        var pTop = $('body').scrollTop();
        console.log( pTop + ' - ' + oTop );   //just for your debugging
        if( pTop > oTop ){
            counterItensFun();
        }
    });
});
function counterEffect(elem){
  var counterItemValue = elem.getAttribute('data-value');
  setTimeout(function(){
    elem.innerHTML = counterItemValue;
  }, 1000);
}
function counterItensFun(){
  var counterItens = document.querySelectorAll('.odometer');
  for(i = 0; i<counterItens.length; i++){
    counterEffect(counterItens[i]);
  }
}
