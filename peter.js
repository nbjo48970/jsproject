function slideUp(element){
  let elem = document.getElementById(element);
  elem.style.transition = 'height 0.5s linear 0s';
  elem.style.height = '100px';
}

function slideDown(element){
  let elem = document.getElementById(element);
  elem.style.transition = 'height 0.5s linear 0s';
  elem.style.height = '0px';
}
