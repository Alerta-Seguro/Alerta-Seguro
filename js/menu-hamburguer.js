const menuHam = document.querySelector('.menu-ham');
const navOffScreen = document.querySelector('.nav-off-screen');
menuHam.addEventListener('click', () => {
    menuHam.classList.toggle('active');
    navOffScreen.classList.toggle('active');
});