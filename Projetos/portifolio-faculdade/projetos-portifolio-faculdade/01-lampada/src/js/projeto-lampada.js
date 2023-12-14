const acende = document.getElementById("acende");
const apaga = document.getElementById("apaga");
const lamp = document.getElementById("lamp");
const conserta = document.getElementById("conserta");

function lampOn() {
  if (!VerificaLampadaQuebrada()) {
    lamp.src = "src/img/lampada-acesa-removebg-preview.png";
  }
}

function lampOff() {
  if (!VerificaLampadaQuebrada()) {
    lamp.src = "src/img/lampada-apagada-removebg-preview.png";
  }
}

function lampQuebra() {
  lamp.src = "src/img/lampada-quebrada-removebg-preview.png";
}

function lampConserta() {
  lamp.src = "src/img/lampada-apagada-removebg-preview.png";
}

function VerificaLampadaQuebrada() {
  return lamp.src.indexOf("lampada-quebrada") > -1;
}

acende.addEventListener("click", lampOn);
apaga.addEventListener("click", lampOff);
conserta.addEventListener("click", lampConserta);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampQuebra);
