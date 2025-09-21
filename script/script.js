const menuLst = document.getElementById('hamburger-menu');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
    menuLst.classList.contains('active') ? menuLst.classList.remove('active') : menuLst.classList.add('active');
});