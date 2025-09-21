const menuLst = document.getElementById('hamburger-menu');
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.querySelector('.overlay');

//menu toggle
menuToggle.addEventListener('click', () => {
  menuLst.classList.toggle('active');
  overlay.classList.toggle('active');
});

// overlay
overlay.addEventListener('click', () => {
    menuLst.classList.remove('active');
    overlay.classList.remove('active');
});