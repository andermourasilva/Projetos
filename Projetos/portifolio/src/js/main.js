// TEMA DA TELA
function AlterarIconeEscuroClaro() {
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

const elOla = document.querySelector(".hello-word");
const elEuSou = document.querySelector(".euSou");
const elSobreMim = document.querySelector(".Atualmente");
const olaMundo = "Olá Mundo!";
const sobreMim = "Atualmente um Desenvolvedor Estagiário";
const euSou = "Sou Anderson de Moura Silva...";
const interval = 50;

digitacao(elOla, olaMundo, interval);

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

setTimeout(() => {
  elSobreMim.innerHTML = "";
  digitacao(elEuSou, euSou, interval);
}, olaMundo.length * interval + 200);

setTimeout(() => {
  elSobreMim.innerHTML = "";
  digitacao(elSobreMim, sobreMim, interval);
}, olaMundo.length * interval + 2000);
