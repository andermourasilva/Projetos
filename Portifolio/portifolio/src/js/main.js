// TEMA DA TELA
let temaAtual = "dark";
function AlterarIconeEscuroClaro() {
  const flipModo = document.querySelector(".flip-modo");
  rodarIcone(flipModo);
  alternarTema();
}

function rodarIcone(flip) {
  flip.classList.toggle("active");
}

function alternarTema() {
  temaAtual = temaAtual === "dark" ? "white" : "dark";
  document.body.classList.remove("dark", "white");
  document.body.classList.add(temaAtual);
}

// TEXTO QUE DIGITA SOZINHO

const el = document.querySelector(".hello-word");
const text = "Hello Word!";
const interval = 160;

function Digitando(el, text, interval) {
  const char = text.split("").reverse();

  const typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }

    const next = char.pop();

    el.innerHTML += next;
  }, interval);
}

Digitando(el, text, interval);
