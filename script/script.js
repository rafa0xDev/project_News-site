document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('overlay');

    if (menuToggle && hamburgerMenu && overlay) {
        menuToggle.addEventListener('click', function () {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            hamburgerMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        // Tutup menu saat overlay diklik
        overlay.addEventListener('click', function () {
            hamburgerMenu.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    }
});