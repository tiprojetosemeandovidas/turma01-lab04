document.getElementById('formAgendamento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servicoSelect').value;
    
    // Substitua pelo número do salão
    const numeroWhats = "5500999999999"; 
    
    const texto = `Olá! Gostaria de agendar um horário.\n\n*Nome:* ${nome}\n*Serviço:* ${servico}\n*WhatsApp:* ${telefone}`;
    const msgFormatada = encodeURIComponent(texto);
    
    window.open(`https://wa.me/${numeroWhats}?text=${msgFormatada}`, '_blank');
});
