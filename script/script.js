const menuLst = document.getElementById('hamburger-menu');
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.querySelector('.overlay');

// Toggle menu and overlay
menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuLst.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuLst.classList.remove('active');
    overlay.classList.remove('active');
});