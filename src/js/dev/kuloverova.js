import popup from '../utils/popup';
import form from '../utils/form';
import CircleType from 'circletype';
import 'inputmask';
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const modules = {};
window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  try {
    burgerMenu();
  } catch {}
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    phoneMask();
  } catch {}
  try {
    guaranteeCircles();
  } catch {}
  try {
    otherServicesCircles();
  } catch {}
  try {
    mainTabs();
  } catch {}
  try {
    ourWorksSwiper();
  } catch {}
  try {
    otherServicesSwiper();
  } catch {}
  try {
    reviewsSwiper();
  } catch {}
});

function burgerMenu() {
  const burger = document.querySelector('.header__mob-burger');
  const headerInner = document.querySelector('.header__inner');
  const overlay = document.querySelector('.overlay');

  burger.addEventListener('click', () => {
    if (!burger.classList.contains('active')) {
      burger.classList.add('active');
      headerInner.classList.add('active');
      document.body.style.overflow = 'hidden';
      overlay.classList.add('active');
    } else {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
      overlay.classList.remove('active');
    }
  });

  overlay.addEventListener('click', () => {
    headerInner.classList.remove('active');
    burger.classList.remove('active');
    document.body.style.overflow = '';
    overlay.classList.remove('active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
      overlay.classList.remove('active');
    }
  });
}

function phoneMask() {
  const mask = new Inputmask('+7 (999) 999 99 99');
  mask.mask($('.phone-mask'));
}

function guaranteeCircles() {
  const circles = document.querySelectorAll('.guarantee-banner__circle');

  circles.forEach((circle) => {
    const circleType = new CircleType(circle);
    circle.style.transform = 'rotate(105deg)';
  });
}

function otherServicesCircles() {
  const circles = document.querySelectorAll('.other-services__circle');

  circles.forEach((circle) => {
    const circleType = new CircleType(circle);
    circle.style.transform = 'rotate(105deg)';
  });
}

function mainTabs() {
  const buttons = document.querySelectorAll('.main-tabs__tabs-btn ');
  const tabs = document.querySelectorAll('.main-tabs__tabs-tab');

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      tabs.forEach((tabs) => tabs.classList.remove('active'));
      button.classList.add('active');
      tabs[i].classList.add('active');
    });
  });
}

function ourWorksSwiper() {
  const swiperOurWorks = new Swiper('.our-works__swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    // allowTouchMove: false,
    navigation: {
      nextEl: '.our-works__swiper-btn--next',
      prevEl: '.our-works__swiper-btn--prev'
    },

    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: rem(3.2),
      }
    }
  });
}

function otherServicesSwiper() {
  const swiperOurWorks = new Swiper('.other-services-swiper__swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    // allowTouchMove: false,
    navigation: {
      nextEl: '.other-services-swiper__btn--next',
      prevEl: '.other-services-swiper__btn--prev'
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: rem(3.2),
      }
    }
  });
}

function reviewsSwiper() {
  const swiperOurWorks = new Swiper('.reviews-swiper__swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    autoHeight: true,
    // allowTouchMove: false,
    navigation: {
      nextEl: '.reviews-swiper__btn--next',
      prevEl: '.reviews-swiper__btn--prev'
    },

    
  });
}
