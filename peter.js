let elementHeights = ['50px', '0px'];

function slideUp(element){
  let mainText = document.getElementById(element);
  mainText.style.transition = 'height 0.5s ease-in 0s';
  mainText.style.height = elementHeights[0];

  if (mainText.style.height == elementHeights[0]) {
    let hiddenText = document.getElementById('hidden-txt1');
    hiddenText.style.transition = 'opacity 0.5s linear 0s'
    hiddenText.style.opacity = 1;
  }

  if (mainText.style.height == elementHeights[0]) {
    let hiddenText = document.getElementById('hidden-txt2');
    hiddenText.style.transition = 'opacity 0.5s linear 0s'
    hiddenText.style.opacity = 1;
  }

  if (mainText.style.height == elementHeights[0]) {
    let hiddenText = document.getElementById('hidden-txt3');
    hiddenText.style.transition = 'opacity 0.5s linear 0s'
    hiddenText.style.opacity = 1;
  }

  if (mainText.style.height == elementHeights[0]) {
    let hiddenText = document.getElementById('hidden-txt4');
    hiddenText.style.transition = 'opacity 0.5s linear 0s'
    hiddenText.style.opacity = 1;
  }

  else {
    hiddenText.style.opacity = 0;
    console.log('peter')
  }
}

function slideDown(element){
  let mainText = document.getElementById(element);
  mainText.style.transition = 'height 0.5s ease-in 0s';
  mainText.style.height = elementHeights[1];

  if (mainText.style.height == elementHeights[1]) {
    console.log('peter2')
    let hiddenText = document.getElementById('hidden-txt1');
    hiddenText.style.transition = 'opacity 0.5s linear 0s'
    hiddenText.style.opacity = 0;
  }

  if (mainText.style.height == elementHeights[1]) {
    console.log('peter2')
    let hiddenText = document.getElementById('hidden-txt2');
    hiddenText.style.transition = 'opacity 0.5s linear 0s'
    hiddenText.style.opacity = 0;
  }

  if (mainText.style.height == elementHeights[1]) {
    console.log('peter2')
    let hiddenText = document.getElementById('hidden-txt3');
    hiddenText.style.transition = 'opacity 0.5s linear 0s'
    hiddenText.style.opacity = 0;
  }

  if (mainText.style.height == elementHeights[1]) {
    console.log('peter2')
    let hiddenText = document.getElementById('hidden-txt4');
    hiddenText.style.transition = 'opacity 0.5s linear 0s'
    hiddenText.style.opacity = 0;
  }

  else {
    let hiddenText = document.getElementById('hidden-txt1');
    hiddenText.style.opacity = 0;
    console.log('peter')
  }
}
