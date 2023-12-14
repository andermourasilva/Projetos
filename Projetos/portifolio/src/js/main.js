// TEMA DA TELA
function alterarIconeEscuroClaro() {
  rodarIcone();
  alternarTema();
}

function alternarTema() {
  document.body.classList.toggle("white");
  salvarTema();
}

function salvarTema() {
  localStorage.removeItem("white");

  if (document.body.classList.contains("white")) {
    localStorage.setItem("white", 1);
  }
}

function loadTema() {
  const whiteMode = localStorage.getItem("white");
  if (whiteMode) {
    document.body.classList.remove("dark");
    document.body.classList.add("white");
    rodarIcone();
  }
}
loadTema();

// FLIP

function rodarIcone() {
  const flipModo = document.querySelector(".flip-modo");
  flipModo.classList.toggle("active");
}

// TEXTO QUE DIGITA SOZINHO
const elOla = document.getElementById("olaMundo");
const elEuSou = document.querySelector(".euSou");
const elAtualmente = document.getElementById("cargoAtual");
const elSobreMim = document.querySelector(".sobreMim");
escreverIntrodução();

function escreverIntrodução() {
  const olaMundo = "Olá Mundo!";
  const euSou = "Anderson de Moura Silva...";
  const atualmente = "Desenvolvedor Full Stack.";
  // const sobreMim =
  //   "Sou uma mente inquisitiva e autodidata, sempre em busca de ampliar meu repertório para me aprimorar como profissional, seja nos espaços acadêmicos ou nos desafios do cotidiano.";
  const interval = 50;

  digitacao(elOla, olaMundo, interval);

  setTimeout(() => {
    // elAtualmente.innerHTML = "";
    digitacao(elEuSou, euSou, interval);
  }, olaMundo.length * interval + 200);

  setTimeout(() => {
    // elAtualmente.innerHTML = "";
    digitacao(elAtualmente, atualmente, interval);
  }, olaMundo.length * interval + 2000);

  // setTimeout(() => {
  //   // elSobreMim.innerHTML = "";
  //   digitacao(elSobreMim, sobreMim, 40);
  // }, olaMundo.length * interval + 4000);
}

function digitacao(el, text, interval) {
  const char = text.split("");
  const typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }
    const next = char.shift();
    el.innerHTML += next;
  }, interval);
}

// SCROLL TOP

window.addEventListener("scroll", function () {
  let scroll = this.document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 450);
});

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// EXPANDIR IMAGEM

function expandirFoto(element) {
  element.classList.toggle("expandida");
}

document.addEventListener("click", function (event) {
  const certificados = document.querySelectorAll(".certificado");
  certificados.forEach(function (certificado) {
    if (!certificado.contains(event.target)) {
      certificado.classList.remove("expandida");
    }
  });
});
