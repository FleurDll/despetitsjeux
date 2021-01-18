buttonColours = ["red", "blue", "green", "yellow"];

gamePattern = [];
userClickedPattern = [];

started = false;
level = 0;

$(document).keydown(function(event) {
  $("#level-title").text("Level " + level);
  nextSequence();
  started = true;
});

$(".btn").click(function() {
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("#level-title").text("Game Over ! Appui sur une touche pour recommencer !");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function playSound(name) {
  audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function nextSequence() {
  userClickedPattern = [];
  level++;

  $("#level-title").text("Level " + level);

  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  gamePattern = [];
  level = 0;
  started = false;
}


// RESPONSIVE

$(window).resize(function() {
  var width = $(window).width();
  if (width < 1028){
    $("#level-title").text("Appui sur l'écran pour commencer");
  }
});

function is_touch_enabled() {
    return ( 'ontouchstart' in window ) ||
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );
}

if (is_touch_enabled()) {
  $("#level-title").text("Level " + level);
  nextSequence();
  started = true;
}
