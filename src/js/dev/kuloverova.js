import popup from '../utils/popup';
import form from '../utils/form';
import CircleType from 'circletype';
import 'inputmask';

export const modules = {};
window.$ = window.jQuery = require('jquery');

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


