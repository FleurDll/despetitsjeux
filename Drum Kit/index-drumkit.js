// QUAND ON UTILISE LA SOURIS

$(".drum").each(function(i) {
  $(this).click(function() {

    buttonInnerHTML = $(this).text();

    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
  })
});

// QUAND ON UTILISE LE CLAVIER
$(document).keydown(function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
});

// SON
function makeSound(key) {

  switch (key) {
    case "w":
      tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// ANIMATION
function makeAnimation(currentKey) {
  $("." + currentKey).addClass("pressed");
  setTimeout(function() {
    $("." + currentKey).removeClass("pressed");
  }, 100);
}
