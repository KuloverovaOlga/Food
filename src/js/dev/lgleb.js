const { default: Swiper } = require('swiper');

window.addEventListener('DOMContentLoaded', () => {
  swipers();
});

function swipers() {
  const cateringSwiper = new Swiper('.catering-slider__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32
      }
    },

    navigation: {
      nextEl: '.catering-slider__button-swiper--next',
      prevEl: '.catering-slider__button-swiper--prev'
    }
  });
}
