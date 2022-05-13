const menuMobile = document.querySelector('.menu-hamburguer');
menuMobile.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('moved-menu');
})