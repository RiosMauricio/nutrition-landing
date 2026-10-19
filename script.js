document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil (hamburguesa)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        const toggleMenu = (force) => {
            const open = typeof force === 'boolean' ? force : !nav.classList.contains('active');
            nav.classList.toggle('active', open);
            burger.classList.toggle('active', open);
            burger.setAttribute('aria-expanded', open);
            burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        };

        burger.addEventListener('click', () => toggleMenu());

        // Cerrar el menú al hacer clic en un enlace
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => toggleMenu(false));
        });
    }

    // Animación de aparición de tarjetas al hacer scroll
    const cards = document.querySelectorAll('.card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        cards.forEach(card => observer.observe(card));
    } else {
        cards.forEach(card => card.classList.add('visible'));
    }
});
