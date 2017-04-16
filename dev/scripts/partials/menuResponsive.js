function openMenu(){
  var menu = document.querySelector('.menu');

  if(!menu.classList.contains('is-active')){
    menu.classList.add('is-active');
  }else{
    menu.classList.remove('is-active');
  }
}
