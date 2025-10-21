// projetos.js - Interatividade para projetos.html
// Atividade - Gabriel Andrade Marino - ADS - 2025
document.addEventListener("DOMContentLoaded", () => {
  // ---- 1. Animação de entrada suave nas seções ----
  const sections = document.querySelectorAll("section");

  const aparecer = () => {
    sections.forEach(section => {
      const topo = section.getBoundingClientRect().top;
      if (topo < window.innerHeight * 0.85) {
        section.classList.add("visivel");
      }
    });
  };

  window.addEventListener("scroll", aparecer);
  aparecer(); // executa ao carregar

  // ---- 2. Botão "Voltar ao topo" ----
  const btnTopo = document.createElement("button");
  btnTopo.textContent = "⬆️ Topo";
  btnTopo.classList.add("btn-topo");
  document.body.appendChild(btnTopo);

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTopo.classList.add("mostrar");
    } else {
      btnTopo.classList.remove("mostrar");
    }
  });

  // ---- 3. Contador animado ----
  const contadorDiv = document.createElement("div");
  contadorDiv.classList.add("contador");
  contadorDiv.innerHTML = `
    <p><strong>+<span id="voluntarios">0</span></strong> voluntários ativos</p>
    <p><strong>+<span id="doacoes">0</span></strong> doações realizadas</p>
  `;
  document.querySelector("main").appendChild(contadorDiv);

  const animarContador = (id, valorFinal, duracao) => {
    const elemento = document.getElementById(id);
    let valorAtual = 0;
    const incremento = Math.ceil(valorFinal / (duracao / 30));

    const contador = setInterval(() => {
      valorAtual += incremento;
      if (valorAtual >= valorFinal) {
        valorAtual = valorFinal;
        clearInterval(contador);
      }
      elemento.textContent = valorAtual.toLocaleString("pt-BR");
    }, 30);
  };

  // inicia a animação após pequeno atraso
  setTimeout(() => {
    animarContador("voluntarios", 250, 1500);
    animarContador("doacoes", 420, 1500);
  }, 800);
});
