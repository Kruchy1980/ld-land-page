// Java which is created to toggle menu button
(() => {
    const button = document.querySelector('.js-main-navigation__inner__mobile-button');
    const menu = document.querySelector('.js-main-navigation__menu');

    const toggleClass = () => {
        menu.classList.toggle('main-navigation__menu--open');
    };
    button.addEventListener('click', toggleClass);
    menu.addEventListener('click', toggleClass);
})();