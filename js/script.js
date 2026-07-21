function agendar() {
  const nome = document.getElementById("nome").value.trim();

 const data = document.getElementById("data").value;

  const hora = document.getElementById("hora").value;

  const somenteLetras = /^[A-Za-zÀ-ÿ\s]+$/;

  if (!nome || !data || !hora) {
    alert("Preencha todos os campos!");
    return;
  }

  if (!somenteLetras.test(nome)) {
    alert("Digite apenas letras no campo nome!");
    return;
  }

  const lista = document.getElementById("listaAgendamentos");

  const item = document.createElement("p");

  item.textContent = `${nome} agendou para ${data} às ${hora}`;

  lista.appendChild(item);

  document.getElementById("nome").value = "";
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
}