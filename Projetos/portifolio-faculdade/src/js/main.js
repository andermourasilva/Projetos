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

  const interval = 50;

  digitacao(elOla, olaMundo, interval);

  setTimeout(() => {
    digitacao(elEuSou, euSou, interval);
  }, olaMundo.length * interval + 200);

  setTimeout(() => {
    digitacao(elAtualmente, atualmente, interval);
  }, olaMundo.length * interval + 2000);
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

// // IR PARA SEÇÃO ALVO

function rolarParaSecaoAlvo(id) {
  var secaoAlvo = document.getElementById(id);
  secaoAlvo.scrollIntoView({ behavior: "smooth" });
}

// function rolarParaSecaoTecnologias() {
//   var secaoAlvo = document.getElementById('secao-alvo');
//   secaoAlvo.scrollIntoView({ behavior: 'smooth' });
// }
// function rolarParaSecaoFormaçãoExperiência() {
//   var secaoAlvo = document.getElementById('secao-alvo');
//   secaoAlvo.scrollIntoView({ behavior: 'smooth' });
// }
// function rolarParaSecaoProjetos() {
//   var secaoAlvo = document.getElementById('secao-alvo');
//   secaoAlvo.scrollIntoView({ behavior: 'smooth' });
// }
