document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura os dados
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const servico = document.getElementById('servico').value;

    // Mensagem para o WhatsApp
    const mensagem = `Olá, Cantinho do Luxo! Me chamo ${nome}. Gostaria de agendar o serviço de ${servico}. Meu contato é ${whatsapp}.`;
    
    // Link do WhatsApp (Substitua o número abaixo pelo seu)
    const url = `https://wa.me/5500999999999?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
});

// Efeito de aparecer ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.service-card').forEach(card => observer.observe(card));
