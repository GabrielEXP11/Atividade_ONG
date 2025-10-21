// script.js - Validações, máscaras e submissão do formulário (cadastro.html)
// Atividade - Gabriel Andrade Marino - ADS - 2025
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const cpf = document.querySelector("#cpf");
  const telefone = document.querySelector("#telefone");
  const cep = document.querySelector("#cep");

  // Máscara de CPF
  if (cpf) {
    cpf.addEventListener("input", () => {
      let value = cpf.value.replace(/\D/g, "");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      cpf.value = value;
    });
  }

  // Máscara de Telefone
  if (telefone) {
    telefone.addEventListener("input", () => {
      let value = telefone.value.replace(/\D/g, "");
      if (value.length > 10) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      } else {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      }
      telefone.value = value;
    });
  }

  // Máscara e busca automática do CEP (ViaCEP)
  if (cep) {
    cep.addEventListener("input", async () => {
      let value = cep.value.replace(/\D/g, "");
      if (value.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
          const data = await response.json();
          if (!data.erro) {
            document.querySelector("#endereco").value = data.logradouro || "";
            document.querySelector("#cidade").value = data.localidade || "";
            document.querySelector("#estado").value = data.uf || "";
          } else {
            alert("CEP não encontrado. Verifique e tente novamente.");
          }
        } catch {
          alert("Erro ao buscar o CEP. Verifique sua conexão.");
        }
      }
      cep.value = value.replace(/(\d{5})(\d{3})/, "$1-$2");
    });
  }

  // Validação e confirmação de envio
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
        return;
      }

      // Opção escolhida: mensagem via alert
      alert("Cadastro enviado com sucesso!");

      form.reset();
    });
  }
});
