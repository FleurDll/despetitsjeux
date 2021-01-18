// CLEAR LA VALEUR SAISIE
function clearValueInput() {
  $(".input-binary").val(' ');
}

// FAIRE EN SORTE QUE L'USER PEUT APPUYER SUR ENTER
function handle(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getInput();
    clearValueInput();
  }
}

//RECUPERER NOMBRE INPUT
function getInput() {
  nombreInput = $(".input-binary").val();

  $(".nombre-a-traduire").text(nombreInput);

  // LIMITER LA LONGUEUR DU NOMBRE
  if (nombreInput.length > 11) {
    alert("Introduis un nombre ayant moins de 11 chiffres");
    window.location.reload();
  }

  // GERER LES CONDITIONS POUR LE NOMBRE BINAIRE
  if (nombreInput == "") {
    alert("Introduis un nombre entier");
    window.location.reload();
    return false;
  } else if (nombreInput % 1 !== 0) {
    alert("Introduis un nombre entier. J'y travaille...");
    window.location.reload();
    return false;
  } else if (nombreInput < 0) {
    alert("Introduis un nombre entier au dessus de 0. J'y travaille...");
    window.location.reload();
    return false;
  } else if (nombreInput == 0) {
    $(".resultat-binaire").text("0");
  } else {
    $(".resultat-binaire").text(transalteToBinary(nombreInput));
    $(".fade-out").slideUp(500);
    $(".resultats").removeClass("hidden");
    return true;
  }
}

// TRANSFORMER EN NOMBRE BINAIRE
function transalteToBinary(nombre) {

  var binaryList = [];

  while (Math.floor(nombre) > 0) {

    var modulo = nombre % 2;
    binaryList.push(modulo);

    nombre = Math.floor(nombre / 2);
  }

  binaryReverse = binaryList.reverse()
  binaryString = binaryReverse.join('');

  return binaryString;
}
