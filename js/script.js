window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.navbar'),
        flag = document.querySelector('.navbar__flag-button'),
        promo = document.querySelector('.promo'),
        gallery = document.querySelector('.gallery');


    flag.addEventListener('click', () => {
        menu.classList.toggle('navbar--active');
    });


    function removeClass(item) {
        item.addEventListener('click', () => {
            menu.classList.remove('navbar--active');
        });
    }

    removeClass(promo);
    removeClass(gallery);
});