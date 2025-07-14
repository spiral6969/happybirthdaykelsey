function openCard() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("card-front").classList.remove("hidden");

  const music = document.getElementById("music");
  if (music) music.play();
}

function flipCard() {
  document.getElementById("card-front").classList.add("hidden");
  document.getElementById("card-back").classList.remove("hidden");
}