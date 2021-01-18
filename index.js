i = 0;
text = "Des petits jeux ...";
speed = 70;
typeWriter();
// appearDisappear();

function typeWriter() {

  if (i < text.length) {
    document.querySelector(".titre").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
