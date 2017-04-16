function counterEffect(elem){
  var counterItemValue = elem.getAttribute('data-value');
  setTimeout(function(){
    elem.innerHTML = counterItemValue;
  }, 1000);
}
var counterItens = document.querySelectorAll('.odometer');

for(i = 0; i<counterItens.length; i++){
  counterEffect(counterItens[i]);
}
