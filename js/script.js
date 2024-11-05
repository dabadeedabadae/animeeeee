const burgerBtn = document.querySelector('.burger-btn');
const navbarMenu = document.querySelector('.navbar__menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    navbarMenu.classList.toggle('open');
});

