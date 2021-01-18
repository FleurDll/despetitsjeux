alert("A chaque tour le jeu, introduit une nouvelle couleur. Jusqu'à quel niveau arriveras-tu à recréer la suite ?")

buttonColours = ["red", "blue", "green", "yellow"];

gamePattern = [];
userClickedPattern = [];

started = false;
level = 0;

$(document).one("keydown", function(event) {
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
    $("#level-title").text("Game Over !");
    $(".level").text("Game Over !");

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
  $(".level").text("Level " + level);

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
  $(document).one("keydown", function(event) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  });
}

// RESPONSIVE

function demarrerPartie() {
  $(".level").text("Level " + level);
  nextSequence();
  started = true;
}
