const hamburguer = document.querySelector('.hamburguer');
const menuOffScreen = document.querySelector('.menu-off-screen');


hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    menuOffScreen.classList.toggle('active');
});