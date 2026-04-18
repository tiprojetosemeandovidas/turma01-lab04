
const horarios = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
const selectHora = document.getElementById("hora");

horarios.forEach(h => {
  let option = document.createElement("option");
  option.value = h;
  option.textContent = h;
  selectHora.appendChild(option);
});

document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  const mensagem = `Olá! Meu nome é ${nome}, quero agendar ${servico} no dia ${data} às ${hora}.`;

  const telefone = "5599999999999"; // COLOQUE SEU NÚMERO AQUI

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});
