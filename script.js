document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil (hamburguesa)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation');

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

    // Animación de aparición de elementos al hacer scroll
    const animated = document.querySelectorAll('.card, .step, .feature, .side');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animated.forEach(el => observer.observe(el));
    } else {
        animated.forEach(el => el.classList.add('visible'));
    }
});
