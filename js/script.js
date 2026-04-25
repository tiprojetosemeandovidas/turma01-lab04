
// 1. Efeito de Header Sticky (Fixar o menu ao rolar)
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'var(--white)';
        header.style.boxShadow = 'none';
        header.style.padding = '20px 0';
    }
});

// 2. Rolagem Suave para os links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 3. Integração do Formulário com WhatsApp
const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Captura os valores dos campos
        const nome = this.querySelector('input[type="text"]').value;
        const tel = this.querySelector('input[type="tel"]').value;
        const servico = this.querySelector('select').value;
        const data = this.querySelector('input[type="date"]')?.value || "A combinar";

        // Número do WhatsApp (Substitua pelo seu número real)
        const numeroWhatsApp = "5500999999999"; 

        // Monta a mensagem personalizada
        const mensagem = `Olá! Meu nome é *${nome}*.\n` +
                         `Gostaria de solicitar uma reserva para o serviço: *${servico}*.\n` +
                         `Data pretendida: ${data}\n` +
                         `Meu contato: ${tel}`;

        // Codifica a mensagem para a URL
        const urlMensagem = encodeURIComponent(mensagem);

        // Redireciona para o WhatsApp
        window.open(`https://wa.me/${numeroWhatsApp}?text=${urlMensagem}`, '_blank');
        
        alert("Você será redirecionado para o nosso WhatsApp para finalizar o agendamento!");
    });
}

// 4. Animação de revelação simples (Fade In)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .booking-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});
