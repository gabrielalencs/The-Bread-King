const btnShowCarte = document.getElementById('btn-show-carte');
const containerCarte = document.querySelector('.carte-overlay');
const btnCloseCarte = document.getElementById('btn-close-carte');
const body = document.querySelector('body');

btnShowCarte.addEventListener('click', () => {

    containerCarte.style.opacity = 1;
    containerCarte.style.pointerEvents = 'all';
    body.style.overflowY = 'hidden';

});

btnCloseCarte.addEventListener('click', () => {

    containerCarte.style.opacity = 0;
    containerCarte.style.pointerEvents = 'none';
    body.style.overflowY = 'scroll';

});




const swiper = new Swiper("#swiper-one", {
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination-about",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: ".btn-carrousel-about-right",
        prevEl: ".btn-carrousel-about-left",
    },
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            loop: false
        }
    }
});

const swiperTwo = new Swiper("#swiper-two", {
    spaceBetween: 70,
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination-products",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: ".btn-carrousel-products-right",
        prevEl: ".btn-carrousel-products-left",
    },
    loop: true,
    grabCursor: true,
});