// home.js - Interatividade para index.html

document.addEventListener("DOMContentLoaded", () => {
  // ---- 1. Saudação dinâmica ----
  const saudacao = document.createElement("p");
  saudacao.classList.add("saudacao");
  const hora = new Date().getHours();

  if (hora < 12) {
    saudacao.textContent = "☀️ Bom dia! Que bom ter você aqui na ONG EDUCAP!";
  } else if (hora < 18) {
    saudacao.textContent = "🌤️ Boa tarde! Continue espalhando o bem!";
  } else {
    saudacao.textContent = "🌙 Boa noite! Obrigado por visitar a ONG EDUCAP!";
  }

  const section = document.querySelector("main section");
  if (section) section.prepend(saudacao);

  // ---- 2. Modo Escuro/Claro ----
  const btnModo = document.createElement("button");
  btnModo.textContent = "🌙 Modo Escuro";
  btnModo.classList.add("modo-btn");
  document.body.appendChild(btnModo);

  btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    const modoAtivo = document.body.classList.contains("modo-escuro");

    btnModo.textContent = modoAtivo ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    localStorage.setItem("modo", modoAtivo ? "escuro" : "claro");
  });

  // Recupera modo salvo
  if (localStorage.getItem("modo") === "escuro") {
    document.body.classList.add("modo-escuro");
    btnModo.textContent = "☀️ Modo Claro";
  }

  // ---- 3. Menu Responsivo ----
  const nav = document.querySelector("nav");
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "☰ Menu";
  menuBtn.classList.add("menu-btn");
  nav.parentElement.insertBefore(menuBtn, nav);

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("ativo");
  });
});
