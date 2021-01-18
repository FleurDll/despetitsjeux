// CLEAR LA VALEUR SAISIE
function clearValueInput() {
  $(".input-juste-prix").val(' ');
}

// FAIRE EN SORTE QUE L'USER PEUT APPUYER SUR ENTER
function handle(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    jeuJustePrix();
    clearValueInput();
  }
}

// LE JUSTE PRIX

justePrix = Math.floor(Math.random() * 100) + 1;
vies = 9;

$(".nombre-aleatoire").text(justePrix);

function jeuJustePrix() {

  $(".vies").text(vies);

  guess = $(".input-juste-prix").val();

  isTheGuessRight(guess);
  howManyLifesLeft(vies);
  inputIsRight(guess);
  changeHeart(vies);
}

function isTheGuessRight(guess) {
  if (guess > justePrix) {
    $(".resultat-message").text("Plus petit !");
    vies--;
  } else if (guess < justePrix) {
    $(".resultat-message").text("Plus grand !");
    vies--;
  } else if (guess == justePrix) {
    $(".resultat-message").text("Bravo ! Tu as trouvé le Juste Prix : " + justePrix + " !");
    // document.querySelectorAll(".heart")[vies].classList.remove("clignoter");
  }
}

function howManyLifesLeft(vies) {
  if (vies === -1) {
    $(".resultat-message").text("Perdu ! Le Juste Prix était : " + justePrix + " !");
    document.querySelectorAll(".heart")[0].setAttribute("src", "images/heart-empty.png");
    document.querySelectorAll(".heart")[0].classList.remove("clignoter");
  }
}

function inputIsRight(guess) {
  if (guess <= 0 || guess > 100) {
    $(".big").css("color", "#f05454");
    alert("Introduis un nombre entre 1 et 100 !");
  }
}

function changeHeart(vies) {
  document.querySelectorAll(".heart")[vies + 1].setAttribute("src", "images/heart-empty.png");
  document.querySelectorAll(".heart")[vies].classList.add("clignoter");
  document.querySelectorAll(".heart")[vies + 1].classList.remove("clignoter");
}
