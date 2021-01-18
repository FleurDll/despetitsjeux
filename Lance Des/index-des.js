function demanderPrenom() {
  joueur1 = prompt("Quel est le nom du premier joueur ?");
  joueur2 = prompt("Quel est le nom du deuxième joueur ?");

  prenomJoueur1Lower = joueur1.toLowerCase();
  prenomJoueur2Lower = joueur2.toLowerCase();

  premiereLettreJ1 = prenomJoueur1Lower.slice(0, 1);
  premiereLettreJ2 = prenomJoueur2Lower.slice(0, 1);

  resteLettresJ1 = prenomJoueur1Lower.slice(1, joueur1.length);
  resteLettresJ2 = prenomJoueur2Lower.slice(1, joueur2.length);

  premiereLettreJ1Upper = premiereLettreJ1.toUpperCase();
  premiereLettreJ2Upper = premiereLettreJ2.toUpperCase();

  prenomJ1 = premiereLettreJ1Upper + resteLettresJ1;
  prenomJ2 = premiereLettreJ2Upper + resteLettresJ2;

  $(".nom-joueur1").text(prenomJ1);
  $(".nom-joueur2").text(prenomJ2);

  $(".btn-des").hide();
  $(".reload-des").removeClass("hidden");

}


score1 = 0;
score2 = 0;

function lanceDeDes() {

  aleatoireDes1 = Math.floor(Math.random() * 6) + 1;
  aleatoireDes2 = Math.floor(Math.random() * 6) + 1;

  $(".gagnant-des").removeClass("hidden");

  $(".des1").attr("src", "images/dice" + aleatoireDes1 + ".png");
  $(".des2").attr("src", "images/dice" + aleatoireDes2 + ".png");

   gagant()
   $(".score").removeClass("hidden");
   $(".score1").text(score1);
   $(".score2").text(score2);
}

function gagant() {

  if (aleatoireDes1 > aleatoireDes2) {
    $(".gagnant-des").text(prenomJ1 + " a gagné !");

    score1++;
  }
  else if (aleatoireDes1 === aleatoireDes2) {
    $(".gagnant-des").text("Egalité !");
  }
  else {
    $(".gagnant-des").text(prenomJ2 + " a gagné !");

    score2++;
  }


}
