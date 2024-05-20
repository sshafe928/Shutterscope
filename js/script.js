document.addEventListener('DOMContentLoaded', function() {
var video = document.getElementById('background-video');
video.play();
});

var swiper = new Swiper('.swiper-container', {
effect: 'coverflow',
grabCursor: true,
centeredSlides: true,
slidesPerView: 'auto',
coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
},
pagination: {
    el: '.swiper-pagination',
},
loop: true,
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 12000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
