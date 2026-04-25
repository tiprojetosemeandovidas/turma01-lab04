

// Efeito de Scroll no Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Revelação Suave de Elementos (Intersection Observer)
const observerOptions = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .section-title').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// Simulação de Micro-interação (Haptic feedback visual)
const buttons = document.querySelectorAll('.btn-primary');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        console.log('Interação Premium Detectada');
        // Aqui poderíamos adicionar um som de clique sutil ou feedback haptico
    });
});
