const openBtn = document.getElementById("open");
const resetBtn = document.getElementById("reset");
const envelope = document.querySelector(".envelope");
const carta = document.querySelector(".carta");
const texto = document.querySelector(".carta p");

const mensagem = `Hoje é o dia de uma pessoa muito incrível, maravilhosa e a mais brava que eu conheço kkkk.

Meu amor, eu sei que o aniversário é seu kkk, mas quem ganhou o presente fui eu. Você é uma pessoa incrível, que me ensina todos os dias com a Ester, saiba que eu sou a pessoa mais sortuda desse mundo por ter você na minha vida, e que esse dia 18/12 virou um dia muito especial para mim.

Meu amor, que Deus venha te abençoar nessa nova fase da sua vida, que seja uma temporada de conquistas e sonhos realizados.

Meu amor, saiba que estarei aqui para tudo o que você precisar. Como diz a Palavra: feliz é o homem que encontra uma esposa. E hoje eu digo que desaprendi a viver sem você.

E quero te deixar uma pergunta, Ester Oliveira:
você quer casar comigo e viver uma vida ao meu lado?`;

let index = 0;
let intervalo;

/* Efeito de digitação */
function digitarTexto() {
    texto.textContent = "";
    index = 0;

    // Limpa qualquer intervalo que já esteja rodando antes de começar um novo
    clearInterval(intervalo);

    intervalo = setInterval(() => {
        if (index < mensagem.length) {
            texto.textContent += mensagem.charAt(index);
            index++;
        } else {
            clearInterval(intervalo);
        }
    }, 50);
}

// Evento para abrir a carta
openBtn.addEventListener("click", () => {
    envelope.classList.add("aberto");
    carta.classList.add("aberta");
    digitarTexto();
});

// Evento para resetar
resetBtn.addEventListener("click", () => {
    envelope.classList.remove("aberto");
    carta.classList.remove("aberta");
    clearInterval(intervalo);
    texto.textContent = "";
});