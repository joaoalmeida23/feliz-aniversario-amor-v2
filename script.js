const openBtn = document.getElementById("open");
const resetBtn = document.getElementById("reset");
const envelope = document.querySelector(".envelope");
const carta = document.querySelector(".carta");
const texto = document.querySelector(".carta p");

const mensagem = 
"Você é a melhor coisa que aconteceu na minha vida. Eu te amo muito! ❤️";

let index = 0;
let intervalo;

/* Efeito de digitação */
function digitarTexto() {
  texto.textContent = "";
  index = 0;

  intervalo = setInterval(() => {
    if (index < mensagem.length) {
      texto.textContent += mensagem.charAt(index);
      index++;
    } else {
      clearInterval(intervalo);
    }
  }, 50);
}

/* Corações */
function criarCoracoes() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const coracao = document.createElement("div");
      coracao.classList.add("coracao");
      coracao.innerHTML = "❤️";
      coracao.style.left = Math.random() * 100 + "vw";
      coracao.style.fontSize = (16 + Math.random() * 20) + "px";
      document.body.appendChild(coracao);

      setTimeout(() => {
        coracao.remove();
      }, 4000);
    }, i * 200);
  }
}

/* OPEN */
openBtn.addEventListener("click", () => {
  envelope.classList.add("aberto");
  carta.classList.add("aberta");

  // Vibração no celular
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  digitarTexto();
  criarCoracoes();
});

/* RESET */
resetBtn.addEventListener("click", () => {
  envelope.classList.remove("aberto");
  carta.classList.remove("aberta");
  texto.textContent = "";
  clearInterval(intervalo);
});
